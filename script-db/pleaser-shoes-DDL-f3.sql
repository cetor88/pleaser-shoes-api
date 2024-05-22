-- MySQL Script generated by MySQL Workbench
-- Tue Apr  2 02:20:26 2024
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema pleaser-shoes
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `pleaser-shoes` ;

-- -----------------------------------------------------
-- Schema pleaser-shoes
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `pleaser-shoes` DEFAULT CHARACTER SET utf8 ;
SHOW WARNINGS;
USE `pleaser-shoes` ;

-- -----------------------------------------------------
-- Table `pleaser-shoes`.`factura`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `pleaser-shoes`.`factura` ;

SHOW WARNINGS;
CREATE TABLE IF NOT EXISTS `pleaser-shoes`.`factura` (
  `idFactura` INT NOT NULL,
  `fechaCompra` TIMESTAMP NULL,
  PRIMARY KEY (`idFactura`))
ENGINE = InnoDB;

SHOW WARNINGS;

-- -----------------------------------------------------
-- Table `pleaser-shoes`.`imagen`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `pleaser-shoes`.`imagen` ;

SHOW WARNINGS;
CREATE TABLE IF NOT EXISTS `pleaser-shoes`.`imagen` (
  `idimagen` INT NOT NULL AUTO_INCREMENT,
  `urlImagen` VARCHAR(255) NULL,
  `urlThumbnail` VARCHAR(255) NULL,
  PRIMARY KEY (`idimagen`))
ENGINE = InnoDB;

SHOW WARNINGS;

-- -----------------------------------------------------
-- Table `pleaser-shoes`.`modelo`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `pleaser-shoes`.`modelo` ;

SHOW WARNINGS;
CREATE TABLE IF NOT EXISTS `pleaser-shoes`.`modelo` (
  `idModelo` VARCHAR(50) NOT NULL,
  `descripcion` VARCHAR(200) NULL,
  PRIMARY KEY (`idModelo`))
ENGINE = InnoDB;

SHOW WARNINGS;

-- -----------------------------------------------------
-- Table `pleaser-shoes`.`talla`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `pleaser-shoes`.`talla` ;

SHOW WARNINGS;
CREATE TABLE IF NOT EXISTS `pleaser-shoes`.`talla` (
  `idTalla` INT NOT NULL AUTO_INCREMENT,
  `nacional` INT NULL,
  `americano` INT NULL,
  PRIMARY KEY (`idTalla`))
ENGINE = InnoDB;

SHOW WARNINGS;

-- -----------------------------------------------------
-- Table `pleaser-shoes`.`zapatilla`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `pleaser-shoes`.`zapatilla` ;

SHOW WARNINGS;
CREATE TABLE IF NOT EXISTS `pleaser-shoes`.`zapatilla` (
  `idZapatilla` INT NOT NULL AUTO_INCREMENT,
  `idModelo`  VARCHAR(50) NULL,
  `idImagen` INT NULL,
  `idTalla` INT NULL,
  `idFactura` INT NULL ,
  `disponibilidad` INT NULL,
  `precioCompra` DOUBLE NULL,
  `precioSugerido` DOUBLE NULL,
  `precioVenta` DOUBLE NULL,
  `banVendido` BIT(2) NULL,
  PRIMARY KEY (`idZapatilla`),
  CONSTRAINT `fk_id_modelo`
    FOREIGN KEY (`idModelo`)
    REFERENCES `pleaser-shoes`.`modelo` (`idModelo`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_id_imagen`
    FOREIGN KEY (`idImagen`)
    REFERENCES `pleaser-shoes`.`imagen` (`idimagen`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_id_talla`
    FOREIGN KEY (`idTalla`)
    REFERENCES `pleaser-shoes`.`talla` (`idTalla`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_id_factura`
    FOREIGN KEY (`idFactura`)
    REFERENCES `pleaser-shoes`.`factura` (`idFactura`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

SHOW WARNINGS;
CREATE INDEX `fk_id_modelo_idx` ON `pleaser-shoes`.`zapatilla` (`idModelo` ASC) VISIBLE;

SHOW WARNINGS;
CREATE INDEX `fk_id_imagen_idx` ON `pleaser-shoes`.`zapatilla` (`idImagen` ASC) VISIBLE;

SHOW WARNINGS;
CREATE INDEX `fk_id_talla_idx` ON `pleaser-shoes`.`zapatilla` (`idTalla` ASC) VISIBLE;

SHOW WARNINGS;
CREATE INDEX `fk_id_factura_idx` ON `pleaser-shoes`.`zapatilla` (`idFactura` ASC) VISIBLE;

SHOW WARNINGS;

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

insert into talla (idTalla, nacional, americano) values
(1,1,4),
(2,2,5),
(3,3,6),
(4,4,7),
(5,5,8),
(6,6,9),
(7,7,10);