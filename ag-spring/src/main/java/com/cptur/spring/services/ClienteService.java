package com.cptur.spring.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.cptur.spring.entities.Cliente;
import com.cptur.spring.repositories.ClienteRepository;
import com.cptur.spring.servicies.exceptions.ObjectNotFoundException;

@Service
public class ClienteService {


	@Autowired
	private ClienteRepository repository;
	
	@Transactional(readOnly = true)
	public List<Cliente> findAll() {
		List<Cliente> resultado = repository.findAll();
		return resultado;
	}

	@Transactional(readOnly = true)
	public Cliente findById(Long IdCliente) {
		Optional<Cliente> cliente = repository.findById(IdCliente);
		return cliente.orElseThrow(() -> new ObjectNotFoundException("Cliente não encontrado! Id: " + IdCliente + ", Tipo " + Cliente.class.getName()));
	}

	@Transactional(readOnly = true)
	public void save(Cliente cliente) {
		repository.save(cliente);
	}

	public void delete(Long IdCliente) {
		Optional<Cliente> cliente = repository.findById(IdCliente);
		if (cliente.isPresent()) {
			repository.delete(cliente.get());
		} else {
			System.out.println("Cliente não localizado");
		}
	}
	
	public Cliente update(Cliente cliente) {
		return repository.save(cliente);
	}
}
