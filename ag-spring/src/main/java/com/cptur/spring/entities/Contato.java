package com.cptur.spring.entities;

import java.util.Objects;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "ent_contatos")
public class Contato {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long IdContato;
	private String NomeContato; 
	private String EmailContato; 
	private String AssuntoContato; 
	private String QtPessoas;
	private String NomeDest;
	private String MensagemContato;
	
	public Contato() {
		
	}

	public Contato(Long idContato, String nomeContato, String emailContato, String assuntoContato, String qtPessoas,
			String nomeDest, String mensagemContato) {
		super();
		this.IdContato = idContato;
		this.NomeContato = nomeContato;
		this.EmailContato = emailContato;
		this.AssuntoContato = assuntoContato;
		this.QtPessoas = qtPessoas;
		this.NomeDest = nomeDest;
		this.MensagemContato = mensagemContato;
	}

	public Long getIdContato() {
		return IdContato;
	}

	public void setIdContato(Long idContato) {
		IdContato = idContato;
	}

	public String getNomeContato() {
		return NomeContato;
	}

	public void setNomeContato(String nomeContato) {
		NomeContato = nomeContato;
	}

	public String getEmailContato() {
		return EmailContato;
	}

	public void setEmailContato(String emailContato) {
		EmailContato = emailContato;
	}

	public String getAssuntoContato() {
		return AssuntoContato;
	}

	public void setAssuntoContato(String assuntoContato) {
		AssuntoContato = assuntoContato;
	}

	public String getQtPessoas() {
		return QtPessoas;
	}

	public void setQtPessoas(String qtPessoas) {
		QtPessoas = qtPessoas;
	}

	public String getNomeDest() {
		return NomeDest;
	}

	public void setNomeDest(String nomeDest) {
		NomeDest = nomeDest;
	}

	public String getMensagemContato() {
		return MensagemContato;
	}

	public void setMensagemContato(String mensagemContato) {
		MensagemContato = mensagemContato;
	}

	@Override
	public int hashCode() {
		return Objects.hash(IdContato);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Contato other = (Contato) obj;
		return Objects.equals(IdContato, other.IdContato);
	}
	
	
	
}
