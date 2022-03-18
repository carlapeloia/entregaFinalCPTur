package com.cptur.spring.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cptur.spring.entities.Destino;
import com.cptur.spring.services.DestinoService;

@RestController
@RequestMapping ("/destinos")
@CrossOrigin(origins = "http://localhost:3000")

public class DestinoController {
	
	@Autowired
	private DestinoService service;
	
	
	@GetMapping
	public List<Destino> findAll() {
		return service.findAll();
	}
	
	@GetMapping("/{IdDestino}")
	public Destino findById(@PathVariable Long IdDestino) {
		return service.findById(IdDestino);
	}

	@PostMapping("/")
	public ResponseEntity<Destino> save(@RequestBody Destino destino) {
		service.save(destino);
		return ResponseEntity.ok().body(destino);
	}

	@DeleteMapping("/{IdDestino}")
	public ResponseEntity<Destino> delete(@PathVariable Long IdDestino) {
		Destino destino = service.findById(IdDestino);
		service.delete(IdDestino);
		return ResponseEntity.ok().body(destino);
	}
	
	@PutMapping("/update")
	public ResponseEntity<Destino> update(@RequestBody Destino destino) {
		destino = service.update(destino);
		return ResponseEntity.ok().body(destino);
	}
}
