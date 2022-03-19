package com.cptur.spring.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cptur.spring.entities.Cliente;
import com.cptur.spring.services.ClienteService;

@RestController
@RequestMapping ("/clientes")
//@EnableGlobalMethodSecurity(prePostEnabled = true)
public class ClienteController {

	@Autowired
	private ClienteService service;
	
	
	@GetMapping
	public List<Cliente> findAll() {
		return service.findAll();
	}
	
	@GetMapping("/{IdCliente}")
	public Cliente findById(@PathVariable Long IdCliente) {
		return service.findById(IdCliente);
	}

	@PostMapping("/admin/inserir")
	//@PreAuthorize("hasRole('ADMIN')")
	public ResponseEntity<Cliente> save(@RequestBody Cliente cliente) {
		service.save(cliente);
		return ResponseEntity.ok().body(cliente);
	}

	@DeleteMapping("/admin/deletar/{IdCliente}")
	//@PreAuthorize("hasRole('ADMIN')")
	public ResponseEntity<Cliente> delete(@PathVariable Long IdCliente) {
		Cliente cliente = service.findById(IdCliente);
		service.delete(IdCliente);
		return ResponseEntity.ok().body(cliente);
	}
	
	@PutMapping("/admin/atualizar")
	//@PreAuthorize("hasRole('ADMIN')")
	public ResponseEntity<Cliente> update(@RequestBody Cliente cliente) {
		cliente = service.update(cliente);
		return ResponseEntity.ok().body(cliente);
	}
}
