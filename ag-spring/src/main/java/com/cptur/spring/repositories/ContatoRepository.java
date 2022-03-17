package com.cptur.spring.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cptur.spring.entities.Contato;

@Repository
public interface ContatoRepository extends JpaRepository<Contato, Long>{

}
