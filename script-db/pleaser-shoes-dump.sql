/*
 Navicat Premium Data Transfer

 Source Server         : localhost_3306
 Source Server Type    : MySQL
 Source Server Version : 100419
 Source Host           : localhost:3306
 Source Schema         : pleaser-shoes

 Target Server Type    : MySQL
 Target Server Version : 100419
 File Encoding         : 65001

 Date: 14/02/2022 08:41:54
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for factura
-- ----------------------------
DROP TABLE IF EXISTS `factura`;
CREATE TABLE `factura`  (
  `idFactura` int(50) NOT NULL AUTO_INCREMENT,
  `idModelo` int(50) NULL DEFAULT NULL,
  `noFactura` varchar(50) CHARACTER SET ascii COLLATE ascii_bin NULL DEFAULT NULL,
  `talla` varchar(10) CHARACTER SET ascii COLLATE ascii_bin NULL DEFAULT NULL,
  `precioCompra` double(7, 0) NULL DEFAULT NULL,
  `fechaFactura` date NULL DEFAULT NULL,
  PRIMARY KEY (`idFactura`) USING BTREE,
  INDEX `idModeloFk`(`idModelo`) USING BTREE,
  CONSTRAINT `idModeloFk` FOREIGN KEY (`idModelo`) REFERENCES `modelo` (`idModelo`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB AUTO_INCREMENT = 263 CHARACTER SET = ascii COLLATE = ascii_bin ROW_FORMAT = Dynamic;

ALTER TABLE factura AUTO_INCREMENT = 1;

-- ----------------------------
-- Records of factura
-- ----------------------------
-- ----------------------------
-- Table structure for imagen
-- ----------------------------
DROP TABLE IF EXISTS `imagen`;
CREATE TABLE `imagen`  (
  `idImagen` varchar(50) CHARACTER SET ascii COLLATE ascii_bin NOT NULL,
  `urlImagen` varchar(255) CHARACTER SET ascii COLLATE ascii_bin NULL DEFAULT NULL,
  `urlImagenThumbnail` varchar(255) CHARACTER SET ascii COLLATE ascii_bin NULL DEFAULT NULL,
  PRIMARY KEY (`idImagen`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = ascii COLLATE = ascii_bin ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of imagen
-- ----------------------------
-- ----------------------------
-- Table structure for inventario
-- ----------------------------
DROP TABLE IF EXISTS `inventario`;
CREATE TABLE `inventario`  (
  `idInventario` int(50) NOT NULL AUTO_INCREMENT,
  `idModelo` int(50) NULL DEFAULT NULL,
  `idImagen` varchar(50) CHARACTER SET ascii COLLATE ascii_bin NULL DEFAULT NULL,
  `idFactura` int(50) NULL DEFAULT NULL,
  `talla` int(2) NULL DEFAULT NULL,
  `precioCompra` double(7, 0) NULL DEFAULT NULL,
  `precioSugerido` double(7, 0) NULL DEFAULT NULL,
  `precioVenta` double(7, 0) NULL DEFAULT NULL,
  `ajustePrecio` double(7, 0) NULL DEFAULT NULL,
  `estaVendida` int(1) NULL DEFAULT NULL,
  `fechaInventario` date NULL DEFAULT NULL,
  PRIMARY KEY (`idInventario`) USING BTREE,
  INDEX `idModeloFk_2`(`idModelo`) USING BTREE,
  INDEX `idImagenFk`(`idImagen`) USING BTREE,
  INDEX `idFacturaFk`(`idFactura`) USING BTREE,
  CONSTRAINT `idFacturaFk` FOREIGN KEY (`idFactura`) REFERENCES `factura` (`idFactura`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `idImagenFk` FOREIGN KEY (`idImagen`) REFERENCES `imagen` (`idImagen`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `idModeloFk_2` FOREIGN KEY (`idModelo`) REFERENCES `modelo` (`idModelo`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB AUTO_INCREMENT = 254 CHARACTER SET = ascii COLLATE = ascii_bin ROW_FORMAT = Dynamic;

ALTER TABLE inventario AUTO_INCREMENT = 1;
-- ----------------------------
-- Records of inventario
-- ----------------------------

-- ----------------------------
-- Table structure for modelo
-- ----------------------------
DROP TABLE IF EXISTS `modelo`;
CREATE TABLE `modelo`  (
  `idModelo` int(50) NOT NULL AUTO_INCREMENT,
  `modelo` varchar(100) CHARACTER SET ascii COLLATE ascii_bin NULL DEFAULT NULL,
  `descripcion` varchar(255) CHARACTER SET ascii COLLATE ascii_bin NULL DEFAULT NULL,
  PRIMARY KEY (`idModelo`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 154 CHARACTER SET = ascii COLLATE = ascii_bin ROW_FORMAT = Dynamic;

ALTER TABLE modelo AUTO_INCREMENT = 1;
-- ----------------------------
-- Records of modelo
-- ----------------------------
-- ----------------------------
-- Table structure for usuario
-- ----------------------------
DROP TABLE IF EXISTS `usuario`;
CREATE TABLE `usuario`  (
  `idUsuario` int(50) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) CHARACTER SET ascii COLLATE ascii_bin NULL DEFAULT NULL,
  `apellidoPat` varchar(100) CHARACTER SET ascii COLLATE ascii_bin NULL DEFAULT NULL,
  `alias` varchar(50) CHARACTER SET ascii COLLATE ascii_bin NULL DEFAULT NULL,
  `correo` varchar(150) CHARACTER SET ascii COLLATE ascii_bin NULL DEFAULT NULL,
  `password` varchar(150) CHARACTER SET ascii COLLATE ascii_bin NULL DEFAULT NULL,
  `fechaAlta` datetime(6) NULL DEFAULT NULL,
  PRIMARY KEY (`idUsuario`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 3 CHARACTER SET = ascii COLLATE = ascii_bin ROW_FORMAT = Dynamic;

ALTER TABLE usuario AUTO_INCREMENT = 1;
-- ----------------------------
-- Records of usuario
-- ----------------------------
INSERT INTO `usuario` VALUES (1, 'Hector', 'Hernandez', 'cetor', 'hector.ht10@gmail.com', '123456', '2022-02-07 13:08:22.000000');
INSERT INTO `usuario` VALUES (2, 'Cesar', 'Hernandez', 'cesar', 'cesar@gmail.com', '123456', '2022-02-07 13:09:53.000000');

-- ----------------------------
-- Table structure for venta
-- ----------------------------
DROP TABLE IF EXISTS `venta`;
CREATE TABLE `venta`  (
  `idVenta` int(50) NOT NULL AUTO_INCREMENT,
  `idInventario` int(50) NULL DEFAULT NULL,
  `idUsuario` int(50) NULL DEFAULT NULL,
  `precioVenta` double(7, 0) NULL DEFAULT NULL,
  `fechaVenta` datetime(6) NULL DEFAULT NULL,
  PRIMARY KEY (`idVenta`) USING BTREE,
  INDEX `idInventarioFk`(`idInventario`) USING BTREE,
  INDEX `idUsuarioFk`(`idUsuario`) USING BTREE,
  CONSTRAINT `idInventarioFk` FOREIGN KEY (`idInventario`) REFERENCES `inventario` (`idInventario`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `idUsuarioFk` FOREIGN KEY (`idUsuario`) REFERENCES `usuario` (`idUsuario`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = ascii COLLATE = ascii_bin ROW_FORMAT = Dynamic;

SET FOREIGN_KEY_CHECKS = 1;


ALTER TABLE venta AUTO_INCREMENT = 1;