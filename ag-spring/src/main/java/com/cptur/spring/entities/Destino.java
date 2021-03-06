package com.cptur.spring.entities;

import java.util.Objects;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "ent_destinos")
public class Destino {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long IdDestino;
	private String NomeDestino; 
	private String TipoDestino; 
	private String ClimaDestino; 
	private String DescricaoDestino;
	private String FotoDestino;
	
	public Destino() {
		
	}
	

	public Destino(Long idDestino, String nomeDestino, String tipoDestino, String climaDestino, String descricaoDestino,
			String fotoDestino) {
		super();
		this.IdDestino = idDestino;
		this.NomeDestino = nomeDestino;
		this.TipoDestino = tipoDestino;
		this.ClimaDestino = climaDestino;
		this.DescricaoDestino = descricaoDestino;
		this.FotoDestino = fotoDestino;
	}


	public Long getIdDestino() {
		return IdDestino;
	}

	public void setIdDestino(Long idDestino) {
		IdDestino = idDestino;
	}

	public String getNomeDestino() {
		return NomeDestino;
	}

	public void setNomeDestino(String nomeDestino) {
		NomeDestino = nomeDestino;
	}

	public String getTipoDestino() {
		return TipoDestino;
	}

	public void setTipoDestino(String tipoDestino) {
		TipoDestino = tipoDestino;
	}

	public String getClimaDestino() {
		return ClimaDestino;
	}

	public void setClimaDestino(String climaDestino) {
		ClimaDestino = climaDestino;
	}

	public String getDescricaoDestino() {
		return DescricaoDestino;
	}

	public void setDescricaoDestino(String descricaoDestino) {
		DescricaoDestino = descricaoDestino;
	}

	public String getFotoDestino() {
		return FotoDestino;
	}

	public void setFotoDestino(String fotoDestino) {
		FotoDestino = fotoDestino;
	}


	@Override
	public int hashCode() {
		return Objects.hash(IdDestino);
	}


	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Destino other = (Destino) obj;
		return Objects.equals(IdDestino, other.IdDestino);
	}
	
	
	
}
