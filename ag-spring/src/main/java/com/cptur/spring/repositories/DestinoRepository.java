package com.cptur.spring.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cptur.spring.entities.Destino;

@Repository
public interface DestinoRepository extends JpaRepository<Destino, Long>{
	
}
