package com.portfolio.mu.Entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Educacion {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	
	private int id;
	
	private String nombreEdu;
	
	private String descripcionEdu;

	
	// Constructors
	public Educacion() {
	}

	public Educacion(String nombreEdu, String descripcionEdu) {
		this.nombreEdu = nombreEdu;
		this.descripcionEdu = descripcionEdu;
	}
	
	// Getters & Setters
	
	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getNombreEdu() {
		return nombreEdu;
	}

	public void setNombreEdu(String nombreEdu) {
		this.nombreEdu = nombreEdu;
	}

	public String getDescripcionEdu() {
		return descripcionEdu;
	}

	public void setDescripcionEdu(String descripcionEdu) {
		this.descripcionEdu = descripcionEdu;
	}
	
	
	
}
