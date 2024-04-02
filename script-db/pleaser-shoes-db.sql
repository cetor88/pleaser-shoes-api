CREATE TABLE `factura` (
`idFactura` int(50) NOT NULL AUTO_INCREMENT,
`idModelo` int(50) NULL DEFAULT NULL,
`noFactura` varchar(50) CHARACTER SET ascii COLLATE ascii_bin NULL DEFAULT NULL,
`talla` double(7,0) NULL DEFAULT NULL,
`precioCompra` double(7,0) NULL DEFAULT NULL,
PRIMARY KEY (`idFactura`) ,
INDEX `idModeloFk` (`idModelo` ASC) USING BTREE
)
ENGINE = InnoDB
AUTO_INCREMENT = 1
AVG_ROW_LENGTH = 0
DEFAULT CHARACTER SET = ascii
COLLATE = ascii_bin
KEY_BLOCK_SIZE = 0
MAX_ROWS = 0
MIN_ROWS = 0
ROW_FORMAT = Dynamic;
CREATE TABLE `imagen` (
`idImagen` varchar(50) CHARACTER SET ascii COLLATE ascii_bin NOT NULL,
`urlImagen` varchar(255) CHARACTER SET ascii COLLATE ascii_bin NULL DEFAULT NULL,
`urlImagenThumbnail` varchar(255) CHARACTER SET ascii COLLATE ascii_bin NULL DEFAULT NULL,
PRIMARY KEY (`idImagen`) 
)
ENGINE = InnoDB
AUTO_INCREMENT = 0
AVG_ROW_LENGTH = 0
DEFAULT CHARACTER SET = ascii
COLLATE = ascii_bin
KEY_BLOCK_SIZE = 0
MAX_ROWS = 0
MIN_ROWS = 0
ROW_FORMAT = Dynamic;
CREATE TABLE `inventario` (
`idInventario` int(50) NOT NULL AUTO_INCREMENT,
`idModelo` int(50) NULL DEFAULT NULL,
`idImagen` varchar(50) CHARACTER SET ascii COLLATE ascii_bin NULL DEFAULT NULL,
`idFactura` int(50) NULL DEFAULT NULL,
`talla` int(2) NULL DEFAULT NULL,
`precioCompra` double(7,0) NULL DEFAULT NULL,
`precioSugerido` double(7,0) NULL DEFAULT NULL,
`precioVenta` double(7,0) NULL DEFAULT NULL,
`ajustePrecio` double(7,0) NULL DEFAULT NULL,
`estaVendida` int(1) NULL DEFAULT NULL,
PRIMARY KEY (`idInventario`) ,
INDEX `idModeloFk_2` (`idModelo` ASC) USING BTREE,
INDEX `idImagenFk` (`idImagen` ASC) USING BTREE,
INDEX `idFacturaFk` (`idFactura` ASC) USING BTREE
)
ENGINE = InnoDB
AUTO_INCREMENT = 1
AVG_ROW_LENGTH = 0
DEFAULT CHARACTER SET = ascii
COLLATE = ascii_bin
KEY_BLOCK_SIZE = 0
MAX_ROWS = 0
MIN_ROWS = 0
ROW_FORMAT = Dynamic;
CREATE TABLE `modelo` (
`idModelo` int(50) NOT NULL AUTO_INCREMENT,
`modelo` varchar(100) CHARACTER SET ascii COLLATE ascii_bin NULL DEFAULT NULL,
`descripcion` varchar(255) CHARACTER SET ascii COLLATE ascii_bin NULL DEFAULT NULL,
PRIMARY KEY (`idModelo`) 
)
ENGINE = InnoDB
AUTO_INCREMENT = 1
AVG_ROW_LENGTH = 0
DEFAULT CHARACTER SET = ascii
COLLATE = ascii_bin
KEY_BLOCK_SIZE = 0
MAX_ROWS = 0
MIN_ROWS = 0
ROW_FORMAT = Dynamic;
CREATE TABLE `usuario` (
`idUsuario` int(50) NOT NULL AUTO_INCREMENT,
`nombre` varchar(100) CHARACTER SET ascii COLLATE ascii_bin NULL DEFAULT NULL,
`apellidoPat` varchar(100) CHARACTER SET ascii COLLATE ascii_bin NULL DEFAULT NULL,
`alias` varchar(50) CHARACTER SET ascii COLLATE ascii_bin NULL DEFAULT NULL,
`correo` varchar(150) CHARACTER SET ascii COLLATE ascii_bin NULL DEFAULT NULL,
`password` varchar(150) CHARACTER SET ascii COLLATE ascii_bin NULL DEFAULT NULL,
`fechaAlta` datetime(6) NULL DEFAULT NULL,
PRIMARY KEY (`idUsuario`) 
)
ENGINE = InnoDB
AUTO_INCREMENT = 1
AVG_ROW_LENGTH = 0
DEFAULT CHARACTER SET = ascii
COLLATE = ascii_bin
KEY_BLOCK_SIZE = 0
MAX_ROWS = 0
MIN_ROWS = 0
ROW_FORMAT = Dynamic;
CREATE TABLE `venta` (
`idVenta` int(50) NOT NULL AUTO_INCREMENT,
`idInventario` int(50) NULL DEFAULT NULL,
`idUsuario` int(50) NULL DEFAULT NULL,
`precioVenta` double(7,0) NULL DEFAULT NULL,
`fechaVenta` datetime(6) NULL DEFAULT NULL,
PRIMARY KEY (`idVenta`) ,
INDEX `idInventarioFk` (`idInventario` ASC) USING BTREE,
INDEX `idUsuarioFk` (`idUsuario` ASC) USING BTREE
)
ENGINE = InnoDB
AUTO_INCREMENT = 1
AVG_ROW_LENGTH = 0
DEFAULT CHARACTER SET = ascii
COLLATE = ascii_bin
KEY_BLOCK_SIZE = 0
MAX_ROWS = 0
MIN_ROWS = 0
ROW_FORMAT = Dynamic;

ALTER TABLE `factura` ADD CONSTRAINT `idModeloFk` FOREIGN KEY (`idModelo`) REFERENCES `modelo` (`idModelo`) ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE `inventario` ADD CONSTRAINT `idFacturaFk` FOREIGN KEY (`idFactura`) REFERENCES `factura` (`idFactura`) ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE `inventario` ADD CONSTRAINT `idImagenFk` FOREIGN KEY (`idImagen`) REFERENCES `imagen` (`idImagen`) ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE `inventario` ADD CONSTRAINT `idModeloFk_2` FOREIGN KEY (`idModelo`) REFERENCES `modelo` (`idModelo`) ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE `venta` ADD CONSTRAINT `idInventarioFk` FOREIGN KEY (`idInventario`) REFERENCES `inventario` (`idInventario`) ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE `venta` ADD CONSTRAINT `idUsuarioFk` FOREIGN KEY (`idUsuario`) REFERENCES `usuario` (`idUsuario`) ON DELETE CASCADE ON UPDATE CASCADE;

