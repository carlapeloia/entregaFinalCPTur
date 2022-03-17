INSERT INTO ent_cliente (NomeCliente, CpfCliente, TelefoneCliente, EmailCliente, EstadoCivilCliente) VALUES ('Samira Telles', 12475842228, 1194848-2526, 'samira@yahoo.com', 'Solteira');
INSERT INTO ent_cliente(NomeCliente, CpfCliente, TelefoneCliente, EmailCliente, EstadoCivilCliente) VALUES ('Jonas Keller', 34475842252, 11985852122, 'jonasabc@hotmail.com', 'Divorciado');

INSERT INTO ent_destino (NomeDestino, TipoDestino, ClimaDestino, DescricaoDestino, FotoDestino) VALUES ('Zurique', 'Internacional', 'Frio', 'A origem do nome Zurique está provavelmente nas línguas celtas com a palavra Turus. Em Zurique, o verão é agradável e com precipitação; o inverno é muito frio. Durante o ano inteiro, o tempo é de céu parcialmente encoberto.', 'https://th.bing.com/th/id/R.c2ce2424f6b8a5224d66d8b54c4992ae?rik=Tzih3VNJEFqWAA&pid=ImgRaw&r=0');

INSERT INTO ent_contato (IdCliente, IdDestino, AssuntoContato, QtPessoas, MensagemContato) VALUES (1, 1, 'Orçamento', 2, 'Podem entrar em contato para orçamento para 5 a 9 de Maio?');
