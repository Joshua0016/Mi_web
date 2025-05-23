CREATE database if not exists suspension;
use suspension;
create table marcas(
id int not null auto_increment,
nombre varchar(50) not null,
modelo varchar(50) not null,
primary key(id)
);

create table modelos_anios(
id int not null auto_increment,
modelo_id int not null,
anio varchar(10) not null,
primary key (id),
foreign key(modelo_id) references marcas(id) 
);

create table balljoints(
id int not null auto_increment,
anioID int not null,
-- Referencias 
refJoint varchar(20), -- Algunos vehículos solo tienen una sola "balljoint
refJointSup varchar(20), -- Superior
refJointInf varchar (20),	-- Inferior
refJointInf_izq varchar (20), -- Inferior izquierda
refJointInf_der varchar (20), -- Inferior derecha
primary key (id),
foreign key (anioID) references modelos_anios(id)
);


								-- CREATE --

-- vehiculos
insert into marcas (nombre, modelo) value ("Toyota", "4Runner");
insert into marcas (nombre, modelo) value ("Toyota", "Camry");

insert into marcas (nombre, modelo) values ("Toyota","Corolla");
insert into marcas (nombre, modelo) values ("Toyota", "Highlander");
insert into marcas (nombre, modelo) values ("Toyota", "Land Cruiser Prado");
insert into marcas (nombre, modelo) values ("Toyota", "Rav4");
insert into marcas (nombre, modelo) values ("Honda", "Accord");
insert into marcas (nombre, modelo) values ("Honda", "Civic");
insert into marcas (nombre, modelo) values ("Honda", "CR-V");
insert into marcas (nombre, modelo) values ("Honda", "Fit");
insert into marcas (nombre, modelo) values ("Honda", "Odyssey");
insert into marcas (nombre, modelo) values ("Honda", "Piilot");


-- modelosanios
insert into modelos_anios (modelo_id, anio) value (1, "1986-1995");
insert into modelos_anios(modelo_id, anio) value (1, "1886-1888"); 
insert into modelos_anios(modelo_id, anio) value (1, "1989-1995");
insert into modelos_anios(modelo_id, anio) value (1, "1996-2002");
insert into modelos_anios(modelo_id, anio)
	value
		(1, "2003-2019"),
        (1, "2010-2019");
       
insert into modelos_anios(modelo_id, anio) value (2, "2001-2006"); 
insert into modelos_anios(modelo_id, anio)	value (2, "2007-20017");

insert into modelos_anios(modelo_id, anio) values (3, "1996-2008");
insert into modelos_anios (modelo_id, anio)
	values
		(3, "2009-2019");
insert into modelos_anios (modelo_id, anio) values (4, "2001-2007");
insert into modelos_anios (modelo_id, anio) values	
	(5,"1996-2002"),
    (5,"2003-2008");
insert into modelos_anios (modelo_id, anio) 
		values
			(6, "2001-2005"),
            (6, "2006-2018");
insert into modelos_anios (modelo_id, anio) 
	values
		(7, "1994-2002"),
        (7, "2003-2007"),
        (7, "2008-20012"),
        (7, "2013-2016");
insert into modelos_anios (modelo_id, anio)
		values
			(8, "1992-2000"),
            (8, "2001-2005"),
            (8, "2006-2011"),
            (8, "2012-2016"); 
insert into modelos_anios (modelo_id, anio) 
	values 	
		(9,"1997-2001"),
        (9, "2002-2006"),
        (9, "2007-2016");
        
insert into modelos_anios (modelo_id, anio) 
	values
		(10, "2006-2008"),
        (10, "2009-2014");
        
insert into modelos_anios (modelo_id, anio) values (11, "1995-1998");        
insert into modelos_anios(modelo_id, anio ) values (11, "1999-2003");   
insert into modelos_anios(modelo_id, anio) values (12, "2003-2008");

-- ball joints
insert into balljoints (anioID, refJointSup) value (1, "43360-39075");
insert into balljoints (anioID, refJointInf) values(2, "43330-39195");
insert into balljoints (anioID, refJointInf) values(3, "43330-39265");
insert into balljoints (anioID, refJointSup, refJointInf_izq, refJointInf_der) values (4, "43310-39016","43340-39465","43330-39585");
insert into balljoints (anioID, refjointSup, refJointInf) values (5, "43310-60050", "43330-60010");
insert into balljoints (anioID, refjointInf) values (6,"43330-60040");


insert into balljoints (anioID,  refJointInf_izq, refJointInf_der) value (7, "43340-29175", "43330-29405");
insert into balljoints (anioID, refjointInf_izq, refJointInf_der) values (8, "43330-09040","43330-09330");
--
insert into balljoints (anioID, refjointInf)
	values
		(9, "43330-19115"),
		(10, "43330-09190");
insert into balljoints (anioID, refJointInf_izq, refJointInf_der) value (11, "43340-29175","43330-29405");        
insert into balljoints (anioID, refJointInf_izq, refJointInf_der) value(12, "43340-39465", "43330-39585");
insert into balljoints (anioID, refJointInf) values (13, "43330-60010");
insert into balljoints (anioID, refJointInf)
	values
		(14, "43330-19115"),
		(15, "43330-49095");
insert into balljoints (anioID, refJointInf, refJointSup)
	values
		(16, "51220-SM1-A02", NULL),
        (17, "51220-SDA-A02","51270-SR3-003"),
        (18, "51220-TA0-A02", "51270-SR3-003"),
        (19, "51220-T2A-A02", NULL);
insert into balljoints (anioID, refJointInf, refJointSup)
		values	
			(20, "51220-SR3-003", "51270-SR3-003"),
            (21, "51220-S5A-J10", null);
insert into balljoints (anioID, refJointInf_izq, refJointInf_der) values (22, "51230-SNA-A03","51220-SNA-A03");
insert into balljoints (anioID, refJointInf) values (23, "51220-TR0-A01");            
 insert into balljoints (anioID, refJointInf, refJointSup)
	values
		(24, "51220-SR3-003", "51270-SR3-003"),
        (25, "51220-S9A-982", NULL),
        (26, "51220-STK-A01",NULL);
insert into balljoints (anioID, refJointInf)
			values	
				(27, "51220-SEL-T01"),
                (28, "51220-TK6-A01");
insert into balljoints (anioID, refJointInf) values (29, "51220-SM1-A02");
insert into balljoints (anioID, refJointInf) values (30, "51220-S0X-A01");
insert into balljoints (anioID, refJointInf) values (31, "51220-S3V-A01");

