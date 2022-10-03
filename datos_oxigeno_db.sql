-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Sep 29, 2022 at 01:43 PM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `oxigeno_db`
--
use oxigeno_db;
-- --------------------------------------------------------

--

INSERT INTO `categories` (`id`, `name`, `description`) VALUES
(1, 'Chalecos', 'Chalecos'),
(2, 'Juegos de amarre', 'Juegos de amarre'),
(3, 'Accesorios', 'Accesorios'),
(4, 'Linternas', 'Linternas'),
(5, 'Luces', 'Luces'),
(6, 'Faros', 'Faros'),
(7, 'Anclas', 'Anclas'),
(8, 'Cabos', 'Cabos'),
(9, 'Boyas', 'Boyas'),
(10, 'Anafes', 'Anafes'),
(11, 'Conservadoras', 'Conservadoras'),
(12, 'Frigobares', 'Frigobares');

-- --------------------------------------------------------

--

INSERT INTO `products` (`sku`, `name`, `price`, `description`, `image`, `category`) VALUES
(0, 'Chaleco Salvavidas', 10000, 'TALLE 3: para niños/as hasta 45 kilos.\n\nChaleco Salvavidas para niños con chiripa\n\nCon los estándares de calidad y seguridad que los niños requieren, incluyen tres tiras con hebilla, cuello con sujeción para extracción rápida y chiripá.\n\nUna línea de chalecos económica para niños, ideal para recreación, pesca, paseo, o uso domiciliario\n\nEs una línea económica diseñada casi exclusivamente para pescadores, relleno de espuma de polietileno expandido y confeccionado con materiales livianos, de fácil colocación y comodidad por sus 3 correas horizontales que permiten ajustarlo al cuerpo.\n\nMarca Aquafloat', 'image-1662154666608.png', 1),
(1, 'Chaleco Salvavidas', 10000, 'Chaleco Salvavidas\n\nColor: Azul\n\nMarca Aquafloat\n\nAmplitud para el movimiento de los brazos, una espalda enteriza que brinda no solo flotabilidad extra, sino tambien proteccion y 4 tiras reforzadas que ajustan el chaleco con broches de muy buena calidad que lo hace muy resistente a los golpes y caidas.\n\nUn modelo ideal para la practica de deportes acuaticos como ski, moto de agua,etc\n\nAprobado como DAF por PNA\n\nMaterial: Espuma de celda cerrada 100% Poliester Recubierto con acrilato\n\nEspuma de polietileno expandido\n\n- T4: hasta 45kg\n\n- T6: hasta 65kg\n\n- T8: hasta 85kg\n\n- T10: hasta 100kg\n\n- T12: hasta 120kg\n\n- T14: hasta 140kg', 'image-1662154948364.png', 1),
(2, 'Chaleco Salvavidas', 10000, 'Es una línea económica diseñada casi exclusivamente para pescadores, relleno de espuma de polietileno expandido y confeccionado con materiales livianos, de fácil colocación y comodidad por sus 3 correas horizontales que permiten ajustarlo al cuerpo.\n\nMarca Aquafloat\n\nTalles de 4 a 14\n\n • Talle 4: 30 a 50 kgs\n\n• Talle 6: 50 a 70 kgs\n\n• Talle 8: 70 a 90 kgs\n\n• Talle 10: 90 a 110 kgs\n\n• Talle 12: 110 a 120 kgs\n\n• Talle 14: 120 a 140 kgs\n\n• Talle 16: 140 a 160 kgs\n\nTiras regulables\n\nColores disponibles: a consultar', 'image-1662155589195.png', 1),
(3, 'Chaleco Salvavidas', 10000, 'Chaleco Salvavidas para niños \n\nColor: Verde\n\nCon chiripa\n\nAprobado por la prefectura naval argentina como D.A.F (Dispositivio Auxiliar de Flotación)\n\nMaterial: Espuma de Celda Cerrada\n\nMarca: Aquafloat\n\nEl modelo SKI adaptado para los niños que se caracteriza por su resistencia a los impactos y la comodidad por su optimo calce.\n\nSeguridad, confort y calidad son las propiedades que tenemos que tener en cuenta a la hora de elegir un chaleco para los chicos y este modelo es el apropiado\n\nViene con cuello, chiripa y agarradera para un rapido rescate.\n\nTela trucker resinada\n\nHilado de poliester\n\nColumna de agua 500 ml\n\nHebillas de resina acetal, en pase 25/30mm\n\nCinta de polipropileno de 20/25mm de ancho\n\nEspuma de polietileno cell-aire con estructura de celda cerrada \n\nTALLE 1 = hasta 15kg\n\nTALLE 2 = hasta 25kg\n\nTALLE 3 = hasta 35kg', 'image-1662155627175.png', 1),
(4, 'Inflable De Arrastre', 5000, 'Inflable de Arrastre\n\nMarca: Sportsstuff\n\nModelo: Outlaw Triangular 130 cm\n\nCapacidad Máxima: 1 persona\n\nMedidas desinflado: 134.62 cm x 147.32 cm\n\nCubierta de nylon parcial para trabajos pesados\n\nConstrucción de PVC de calibre alto\n\nEscalas de espuma con doble correa con protectores de nudillos\n\nVálvula de seguridad patentada de velocidad', 'image-1662155998550.png', 2),
(5, 'Manillar Aquafloat + Triangulo', 4000, 'COMBO MANILLAR + TRIANGULO\n\nCuera con Manillar\n\nMarca Aquafloat\n\n19 Metros\n\nResiste 400 Kg\n\nSoga trenzada de polietileno virgen de muy buena calidad, con una excelente flotabilidad.\n\n8 mm de diámetro con boya\n\nGran resistencia al moho y a las bacterias en descomposición.\n\nPorcentaje de elongación: 20% a máxima exigencia\n\nTriangulo para Ski o Wakeboard :\n\nCon cabo reforzado y flotante\n\nColor Naranja', 'image-1662156223288.png', 2),
(6, 'Inflable De Arrastre Sportsstuff Ski Redondo 120 Cm 1 Persona', 6000, 'Inflable de Arrastre\n\nMarca: Sportsstuff\n\nModelo: Ski Redondo 120 cm\n\nCapacidad Máxima: 1 persona\n\nMedidas diametro: 137.16 cm\n\nCubierta de nylon parcialmente cosida doble con ventilación de piso autodrenante\n\nManijas de nylon de lujo con protectores de nudillos de neopreno', 'image-1662156488420.png', 2),
(7, 'Inflador de Pie Plegable', 2000, 'Es rápido y fácil de usar y es plegable, que hace que sea fácil llevar y almacenar. Viene con 3 adaptadores para adaptarse a la mayoría de las válvulas.\n\nBomba de tapa dura es rápida y fácil de usar\n\nPlegable, fácil de transportar y almacenar, se puede poner bajo cubiertas de kayak o asientos de barco\n\n3 adaptadores para adaptarse a la mayoría de las válvulas\n\nLa bomba operada a pie le permite inflar y desviar casi cualquier dispositivo inflable, sin bomba eléctrica y salida de pared.\n\nCambiar fácilmente de la inflación a la deflación\n\nColor: amarillo\n\nMaterial: de plástico\n\nUsos: Bote, gomon, colchones, inflables deportivos, etc!', 'image-1662156736814.jpg', 3),
(8, 'Inflador Eléctrico 12v', 2500, 'Inflador eléctrico\n\nConexión tipo encendedor de auto\n\nViene con 3 picos\n\nVoltaje: 12v\n\nConsumo: 40w\n\nPresión: 0.48 psi\n\nCapacidad: 260 l/min\n\nInfla y Desinfla', 'image-1662156830868.png', 3),
(9, 'Cabo Manillar 20 Metros', 1500, 'Cuerda con Manillar\n\nSe le puede dar doble uso, como cuerda con manillar o como cuerda de arrastre\n\n20 Metros\n\nResiste 400 Kg\n\nSoga trenzada de polietileno virgen de muy buena calidad, con una excelente flotabilidad.\n\nGran resistencia al moho y a las bacterias en descomposición.\n\nPorcentaje de elongación: 20% a máxima exigencia \n\nEl color puede variar según partida', 'image-1662156932218.jpg', 3),
(10, 'Linterna SPINIT POINT MAX 800 recargable', 7500, 'Recargable USB.\nLED: CREE 10W.\nPotencia Máxima: 800 LUMENS.\nEnfoque Zoom.\nFunciones: Alta - Baja - Strobo - SOS - Off.\nEncendido: Contacto posterior táctico.\nMedida: 140 x 35 mm.\nPeso: 142 grs.\nWaterproof: IPX4\nUso: General - Camping - Táctico.', 'image-1662157162424.jpg', 4),
(11, 'Linterna STANLEY 120 indestructible', 4000, 'LINTERNA LED DE ALUMINIO INDESTRUCTIBLE DE 120LM\n\nCarcasa de aluminio de grado aeronáutico 6063.\n• Protección de goma sobre la estructura de aluminio para una durabilidad extrema.\n• Interruptores de botón trasero.\n• Modos alto / bajo / estroboscópico 3.\n• Resistente a golpes y golpes; prueba de caída verificada para 30 pies, muy por encima del estándar industrial de 3 pies.\n• Resistente al agua IPX7.\n\nTIPO\nINDESTRUCTIBLE\nBATERIA: 2AA\nLUMEN (MAX/MIN)\n100/30\nTIEMPO DE USO (HIGH/LOW)\n3H / 8H\nDISTANCIA DE ILUMINACION\n90/50 m', 'image-1662157312894.jpg', 4),
(12, 'Linterna led LENSER T7M 400LM', 21800, 'LED LENSER T7M® es una herramienta de iluminación táctica diseñado para unidades especiales. Esta linterna es prácticamente indestructible. Usted puede usarla para defenderse, rotura de cristales, o servicios de alerta de emergencia con la función SOS. Usted puede hacer retroceder a los atacantes con la función estroboscópica desarrollada militarmente. Con esta linterna puede elegir entre la intensidad del control electrónico de la luz invariable y continua disminución de brillo con la cual tendra una mayor duración de las baterías. Además de ofrecer una gran potencia de luz, esta luz es también un compañero fuerte y fiable en situaciones extremas a causa de sus funciones tácticas.\n\nLED\n\nRef- 9807-M Caja\nConfiguración LED 1 x High Power LED\nPotencia lumínica MÁX. 400 lm – MÍN. 40 lm\nHaz de luz MÁX. 280 m – MÍN. 100 m\nDuración lumínica MÁX. 35 h – MÍN. 2 h\nBATERÍA Y CARCASA\n\nBatería 4 x AAA\nCapacidad de la batería 7,2 Wh\nHermeticidad IPX4\nRecargable No\nDIMENSIONES Y PESO\n\nLongitud 131 mm\nDiámetro del cabezal – mm\nPeso 180 g', 'image-1662157420679.jpg', 4),
(13, 'Spot LED de techo 12V', 2600, 'Spot de LED para techo.\n\nIdeal: Casas rodantes y embarcaciones.\n\nDiseño liviano y ultra delgado y construcción empotrada, es fácil de instalar y deja un aspecto acabado después de la instalación.\n\nVoltaje: 12V DC\n\nPotencia: 3,1 W\n\nConsumo de corriente: 230 mA\n\nColor de iluminación: blanco cálido\n\nFlujo luminoso: 180 lúmenes\n\nTemperatura de color: 2800-3200K\n\nÁngulo de haz: 120 grados\n\nVida útil: más de 50.000 horas.\n\nLED de alta calidad, alta eficiencia Haz de luz suave, distribución uniforme de la luz Calificación térmica baja, segura y duradera para su uso.\n\nDiseño de montaje empotrado fácil\n\nUn aspecto acabado con todos los tornillos ocultos después de la instalación.\n\nPeso: 32 g (cada unidad)\n\nDiámetro exterior: 7 cm\n\nProfundidad: 1 cm\n\nRecorte: 5.2 cm\nMaterial: Plastico', 'image-1662158182805.jpg', 5),
(14, 'Luz Bajo Agua 39 Leds blanco frío', 4500, 'Esta luz subacuática LED multifunción se puede usar en el agua o en tierra, no se requiere que esté bajo el agua para operar como lo hacen otras luces subacuáticas.\n\nLa luz viene con un fuerte aro de acero inoxidable AISI316 pulido y una carcasa para combatir el duro ambiente marino y para una fácil instalación, se incluye una junta de goma. \n\nUso: Submarino y fuera del agua.\n\nLED de color: blanco frío\n\nClasificación IP: IP 68\n\nPotencia: 5.2W\n\nTipo: Montaje en superficie\n\nVoltaje: 10-30VDC\n\nCantidad del LED: 39pcs F\n\nuente de LED: \"2835\" LED\n\nLumen efectivo: 250 LM\n\nTemperatura de color: 5500-6300K\n\nMaterial: plástico y carcasa de acero inoxidable AISI316', 'image-1662159067051.png', 5),
(15, 'Luz de navegación bicolor plástica', 1200, 'Luz de Navegación Bicolor Importada:\n\n• Material: Plástica resistente a los rayos UV\n\n• Medidas: 8.9cm de largo, 5.6cm de ancho y 3.6cm de altura\n\n• Usos: Barcos, Lanchas\n\n• Voltaje: 12 Volts, 8 Watts', 'image-1662159131857.png', 5),
(16, 'Faro con Control Remoto Náutico 12v', 86500, 'Faro Busca Huellas Con control Remoto\n\nFuente de luz: Lámpara halogena\n\n Voltaje de entrada (V): 12v\n\nPotencia de la lámpara (W): 100\n\nLámpara de flujo luminoso (lm): 2300\n\nEficacia luminosa de la lámpara (lm / w): 2300 CRI (Ra>): 865\n\nTemperatura de color (CCT): Blanco cálido\n\nTrabajo de por vida (hora): 3000\n\nMaterial del cuerpo de la lámpara: Aluminio\n\nClasificación del IP: IP54\n\nColor: Blanco \n\nLED Característica: impermeable\n\nModo de control: control remoto\n\nLuz de búsqueda LED giratoria inalámbrica para barco de pesca con control remoto inalámbrico', 'image-1662159440013.png', 6),
(17, 'Faro con Control Remoto ITT Jabsco', 50000, 'Construido con materiales no corrosivos.\n\nLámpara halógena de haz sellado.\n\nEngranaje de larga duración.\n\nBajo amperaje.\n\nEl mecanismo de embrague patentado evita daños en el motor cuando se ejecuta contra topes.\n\nControl remoto y cable de 15 \'incluido.\n\nl haz hermético, sellado con halógeno, detectará peligros a casi 900 \'(275 m) al producir 1 lux a 885\' (268 m) con 100,000 velas. Ofreciendo estilo, rendimiento y valor, el 155 SL tiene curvas de barrido y controles en la punta de los dedos.\n\nDimensiones:  - 203 mm de largo, 162 mm de ancho, 200 mm de alto', 'image-1662159509534.jpg', 6),
(18, 'Faro de mano cazador 12v', 15000, 'Faro cazador\n\nLampara de led 3 w 12 volt\n\nIdeal para autos, botes, camiones, trailers, etc\n\nPara emergencias, localizar señales, etc\n\nPoderoso haz de luz de gran alcance\n\nPara toma de encendedor 12v', 'image-1662159552398.png', 6),
(19, 'Ancla Tipo Danforth 4 Kg Lanchas Galvanizada', 12000, 'ANCLA 4 KG TIPO DANFORD\n\nEstudios realizados indican que las anclas Danford son las que aportan mayor confianza sobrepasando la performance de sus competidoras, ya que ningún ancla posee su gran poder de retención.\n\nAnclar con una Danford significa anclar su bote en cualquier parte del mundo con la mayor seguridad.\n\nGalvanizada en caliente', 'image-1662159770513.jpg', 7),
(20, 'Ancla Plegable Galvanizada 6 Kg', 13000, 'Las anclas plegables se destacan por su gran comodidad y practicidad para embarcaciones pequeñas y gomones ocupa lugar\n\nPermite un cómodo almacenamiento y evita dañar la embarcación', 'image-1662159799005.jpg', 7),
(21, 'Ancla Danforth 2kg + 2m De Cadena + 15m De Cabo', 15000, 'KIT FONDEO.\n\n- ANCLA DANFORTH 2 KG\n\n-2 METROS CADENA GALVANIZADA\n\n-1 GRILLETE\n\n-15 METROS DE CABO DE 10MM', 'image-1662159871137.png', 7),
(22, 'Cabo de Poliester trenzado 8mm', 1800, 'Cabo Trenzado de poliester especial\n\nDiámetro 8 mm\n\nEste cabo de poliester de alta tenacidad, por su construcción tiene un fácil ajuste y manejo.\n\nEs ideal para ser usado en Drizas y Escotas en embarcaciones de paseo\n\nEl precio corresponde a un metro, fraccionamos la cantidad que sea necesaria', 'image-1662160980853.jpg', 8),
(23, 'Cabo de Poliester retorcido 8mm', 2000, 'Cabo Retorcido de Poliester negro\n\nDiámetro 8 mm\n\nDe alta tenacidad fabricada en tres cordeles retorcidos, se presta en color blanco liso.\n\nPosee una excelente resistencia a la tracción, a los rayos ultravioletas y al agua.\n\nSe utiliza fundamentalmente para anclaje y amarre de embarcaciones\n\nMuy flexible y de gran durabilidad', 'image-1662161197027.jpg', 8),
(24, 'Cabo de Poliester retorcido 16mm', 3000, 'Cabo Retorcido de Poliester negro\n\nDiámetro 8 mm\n\nDe alta tenacidad fabricada en tres cordeles retorcidos, se presta en color blanco liso.\n\nPosee una excelente resistencia a la tracción, a los rayos ultravioletas y al agua.\n\nSe utiliza fundamentalmente para anclaje y amarre de embarcaciones\n\nMuy flexible y de gran durabilidad', 'image-1662161280625.jpg', 8),
(25, 'Boya De Fondeo Doble Cono', 1200, 'Boya De Fondeo Doble Cono Plástica\n\nReforzada resistente al sol\n\nColor Rojo\n\nMedidas: 35 cm x 17 cm\n\nIdeal para Kayaks\n\nPara fondear de manera segura', 'image-1662161618186.png', 9),
(26, 'Aro Para Palmera Boya Plástica', 4000, 'Aro para palmera 4 Boyas\n\nColor: Rojo\n\nDiámetro interno: 30cm', 'image-1662161655426.png', 9),
(27, 'Boya Plastica 120 Mm Reforzada', 2000, 'Color disponible ROJO\n\n- Medidas 120 mm\n\n-Ideales para red de pesca y piletas de natacion, fondeo\n\n-Industria Argentina', 'image-1662161762421.jpg', 9),
(28, 'SPINIT anafe VULCAN COMPACT', 21250, 'Anafe cocina acero esmaltado para usar con cartuchos descartables de gas butano. Hornalla de alumino, encendido electrónico y ajuste preciso de la temperatura..\nCaracterísticas:\n\nCicuba de gas a cartucho (no incluido)\nEntrada de calor nominal 2.3 kw.\nConsumo 130 g/h.\nTipo de gas: Butano.\nUso con cartucho spinit de 227 gr, 120 gr o alternativos (no incluidos)\nSistema de encendido piezoelectrónico automático.\nBotón de control de encendido.\nPeso total de 1,2 kg.\nAlta potencia.\nFácil limpieza cubierta y parrilla enlozados.\nDispositivo de seguridad controla la salida de gas.\nParrilla con protección de viento.', 'image-1662162178022.jpg', 10),
(29, 'SPINIT anafe VULCAN CLASSIC', 11720, 'Anafe cocina acero esmaltado para usar con cartuchos descartables de gas butano. Con valija de transporte. Hornalla de alumino, encendido electrónico y ajuste preciso de la temperatura..\n\nCaracterísticas:\nCocina de cas a cartucho (no incluido).\nEntrada de calor nominal 2.2 kw.\nConsumo 155 g/h.\nTipo de gas: butano.\nCuso con cartucho sponit 227 gr o alternativos (coleman).\nSistema de control de encendido y boton de palanca.\nCon práctico maletin para transportar y guardar.\nPeso total de 1.4 kg \nFacil limpieza, cubierta y parrilla endolazos.\nAlta potencia.\nDispositivo de seguridad controla la salida de gas.\nParrilla con protección del viento.', 'image-1662162251333.jpg', 10),
(30, 'Anafe eléctrico Spica SP-1040 negro 220V', 7000, 'Potencia de 2000W.\nCon encendido automático y 2 quemadores.\nSu superficie es de acero.\nControl a perilla.\nCon protección de sobrecalentamiento para evitar posibles accidentes.\nPosee 5 niveles de potencia.\nDimensiones: 45cm de ancho x 5cm de alto x 22cm de profundidad.\nIndispensable para tu cocina.', 'image-1662162343058.webp', 10),
(31, 'Conservadora Termica Heladera Portatil 12v Frio Calor', 19000, 'Caracteristicas:\nVoltaje de la batería: 12 volts\nCapacidad en volumen: 24 L\nTipo de recipiente: Caja\nCon sistema eléctrico: Sí\nCon ruedas: No\nAncho x Altura: 40 cm x 43 cm', 'image-1662162506977.webp', 11),
(32, 'Conservadora Helatodo Portatil', 7000, 'Caracteristicas:\nCapacidad en volumen: 28 L\nTipo de recipiente: Caja\nCon sistema eléctrico: No\nCon ruedas: No', 'image-1662162635375.webp', 11),
(33, 'Heladera Conservadora Portatil', 7000, 'Caracteristicas:\nMarca: Termolar\nCapacidad en volumen: 32 L\nTipo de recipiente: Caja\nCon sistema eléctrico: No\nCon ruedas: No\nAncho x Altura: 47 cm x 39 cm\nColor: Gris Playa', 'image-1662162748190.webp', 11),
(34, 'Heladera 12v/24v 120 Litros con compresor', 155300, 'Heladera bajo mesada 12v/24v\n\nEs compacta pero tiene el tamaño ideal para guardar todo lo que necesites: tu bebida preferida, helados o alimentos de tamaño pequeño.\n\nCuenta con varios compartimentos, rack de latas y anaqueles para que tengas una mayor organización. \n\nEXTRA FRÍO PARA TUS BEBIDAS Y ALIMENTOS\n\nCuenta con un compartimiento superfrío para alimentos y bebidas que necesitan mayor refrigeración. Comida fresca, bebida congelada y una vida más fácil al alcance de tu mano!\n\nCapacidad: 120 litros\n\nDimensiones 48 de ancho , 86 de alto y 54 de profundidad\n\nEficiencia energética: A\n\nPuerta reversible\n\nColor acero\n\nIdeal para embarcaciones/motorhome', 'image-1662163139696.png', 12),
(35, 'Heladera Inox 12v/24v 74 Litros con compresor', 103000, 'Frigobar bajo mesada\n\nVOLTAJE 12V/24V\n\nCon compresor\n\nCARACTERÍSTICAS PRINCIPALES:\n\n > Eficiencia energética B\n\n> Capacidad bruta 80 Lts\n\n> Capacidad Neta 74 Lts\n\n> 2 Estantes\n\n> 2 Estantes en puerta\n\n____________________________________________________  \n\nESPECIFICACIONES:  \n\n> Sistema de refrigeración a compresión\n\n> Sistema de descongelamiento manual\n\n> Puertas reversibles\n\n> Dimensiones (ALxANxPROF): 70,5 x 45 x 55 cm\n\n> Peso 20 Kg\n\n> Color inox\n\n> Origen Argentina  \n\nProduce hielo\n\nSin freezer, con congelador\n\nConsumo: 3,5 amperes por hora aproximadamente\n\nTENEMOS STOCK\n\nIdeal para embarcaciones/motorhome', 'image-1662163185786.png', 12),
(36, 'Heladera frigobar 12V 24V con compresor 50 litros', 91700, 'Frigobar bajo mesada\nVOLTAJE 12V/24V\nCon compresor\nCapacidad 50 Lts\nAlto 50 cm\nAncho 44,5 cm\nProfundidad 47 cm\nMetodo de enfriamiento ciclico\nEficiencia energetica A\nEstantes removibles\nCon pequeño congelador, hace hielo', 'image-1662163229548.png', 12);

-- --------------------------------------------------------

--

INSERT INTO `roles` (`id`, `nombre`) VALUES
(1, 'superuser'),
(2, 'administrador'),
(3, 'cliente');



INSERT INTO `users` (`id`, `nombre`, `apellido`, `password`, `email`, `nacimiento`, `domicilio`, `avatar`, `rol`) VALUES
(1, 'matias', 'tolosa', '$2a$10$lUxp4yFmc1IlebAFojtipuA7eLfUNk36TqyY131RhrmoqtcGqZyMy', 'matolox88@gmail.com', '2020-02-15 00:00:00', 'callao 2070', 'default.png', 2),
(2, 'Franco', 'Acosta', '$2a$10$3cBnc6G85B.zymWPTBlz2..bpcfSncBOqzAyTfGMWYaR5AUbBuuli', 'franco@o2admin', '1995-11-07 00:00:00', 'Brandsen 805', 'default.png', 2),
(3, 'prueba', 'prueba', '$2a$10$WTQ/pirbZILHfCY75WiXC..3T53RReTI1bNaaa8.BlE5YoUWJLEmG', 'prueba@prueba.com', '1995-11-07 00:00:00', 'prueba', 'default.png', 2),
(4, 'Julian', 'Lapido', '$2a$10$ZBdFr6BhfHzZoKUCO.UQVerDO.pxtSvd3JvpdC.TeWvEZwsPkE1uu', 'lapidojulian@gmail.com', '2022-09-06 00:00:00', 'rivadavia 8981', 'avatar-1662941474388.jpeg', 2),
(5, 'julian', 'admin', '$2a$10$/DlJNxtZzbdWy.vjLfYqiOnhwzwMphUnAjafsLDsF4NKDi0iw6oh.', 'jadmin@o2admin.com', '2022-09-29 00:00:00', 'rivadavia 8981', 'avatar-1662941997264.jpeg', 1),
(9, 'Lisandro', 'Tasende', '$2a$10$yyUGJVae8cLObe0dBi8P9.yMpGAWIs6MndWPeUaY7VHmg.YorgeEO', 'lisandro@mail.com', '2022-09-22 00:00:00', 'Mexico 654', 'default.png', 3);


COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
