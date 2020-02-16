-- MySQL Script generated by MySQL Workbench
-- Sun Feb 16 02:52:19 2020
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema feedmeucalgary
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `feedmeucalgary` ;

-- -----------------------------------------------------
-- Schema feedmeucalgary
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `feedmeucalgary` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `feedmeucalgary` ;

-- -----------------------------------------------------
-- Table `feedmeucalgary`.`allergen`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `feedmeucalgary`.`allergen` ;

CREATE TABLE IF NOT EXISTS `feedmeucalgary`.`allergen` (
  `idALLERGEN` INT(11) NOT NULL,
  `name` VARCHAR(45) NULL DEFAULT NULL,
  `GROUP_id` INT(11) NULL DEFAULT NULL,
  PRIMARY KEY (`idALLERGEN`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `feedmeucalgary`.`restriction`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `feedmeucalgary`.`restriction` ;

CREATE TABLE IF NOT EXISTS `feedmeucalgary`.`restriction` (
  `idRESTRICTION` INT(11) NOT NULL,
  `Lifestyle` VARCHAR(45) NULL DEFAULT NULL,
  PRIMARY KEY (`idRESTRICTION`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `feedmeucalgary`.`consists_of`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `feedmeucalgary`.`consists_of` ;

CREATE TABLE IF NOT EXISTS `feedmeucalgary`.`consists_of` (
  `ALLERGEN_id` INT(11) NULL DEFAULT NULL,
  `RESTRICTIONS_id` INT(11) NULL DEFAULT NULL,
  INDEX `ALLERGEN_id_idx` (`ALLERGEN_id` ASC) VISIBLE,
  INDEX `RESTRICTION_id_idx` (`RESTRICTIONS_id` ASC) VISIBLE,
  CONSTRAINT `ALLERGEN_id`
    FOREIGN KEY (`ALLERGEN_id`)
    REFERENCES `feedmeucalgary`.`allergen` (`idALLERGEN`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `RESTRICTION_id`
    FOREIGN KEY (`RESTRICTIONS_id`)
    REFERENCES `feedmeucalgary`.`restriction` (`idRESTRICTION`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `feedmeucalgary`.`restaurant`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `feedmeucalgary`.`restaurant` ;

CREATE TABLE IF NOT EXISTS `feedmeucalgary`.`restaurant` (
  `idRESTAURANT` INT(11) NOT NULL,
  `name` VARCHAR(45) NULL DEFAULT NULL,
  `cuisine` VARCHAR(45) NULL DEFAULT NULL,
  `price` VARCHAR(45) NULL DEFAULT NULL,
  `location` VARCHAR(45) NULL DEFAULT NULL,
  PRIMARY KEY (`idRESTAURANT`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `feedmeucalgary`.`food_dish`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `feedmeucalgary`.`food_dish` ;

CREATE TABLE IF NOT EXISTS `feedmeucalgary`.`food_dish` (
  `idFOOD_DISH` INT(11) NOT NULL,
  `name` VARCHAR(45) NULL DEFAULT NULL,
  `price` DOUBLE NULL DEFAULT NULL,
  `RESTAURANT_ID` INT(11) NULL DEFAULT NULL,
  PRIMARY KEY (`idFOOD_DISH`),
  INDEX `RESTAURANT_id_idx` (`RESTAURANT_ID` ASC) VISIBLE,
  CONSTRAINT `RESTAURANT_id`
    FOREIGN KEY (`RESTAURANT_ID`)
    REFERENCES `feedmeucalgary`.`restaurant` (`idRESTAURANT`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `feedmeucalgary`.`food_group`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `feedmeucalgary`.`food_group` ;

CREATE TABLE IF NOT EXISTS `feedmeucalgary`.`food_group` (
  `FoodGroupID` INT(11) NOT NULL,
  `FoodGroupCode` INT(11) NULL DEFAULT NULL,
  `FoodGroupName` VARCHAR(45) NULL DEFAULT NULL,
  `FoodGroupNameF` VARCHAR(45) NULL DEFAULT NULL,
  PRIMARY KEY (`FoodGroupID`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `feedmeucalgary`.`food_name`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `feedmeucalgary`.`food_name` ;

CREATE TABLE IF NOT EXISTS `feedmeucalgary`.`food_name` (
  `FoodID` INT(11) NOT NULL,
  `FoodCode` INT(11) NULL DEFAULT NULL,
  `FoodGroupID` INT(11) NULL DEFAULT NULL,
  `FoodSourceID` INT(11) NULL DEFAULT NULL,
  `FoodDescription` TEXT NULL DEFAULT NULL,
  `FoodDescriptionF` TEXT NULL DEFAULT NULL,
  `FoodDateOfEntry` TEXT NULL DEFAULT NULL,
  `FoodDateOfPublication` TEXT NULL DEFAULT NULL,
  `CountryCode` TEXT NULL DEFAULT NULL,
  `ScientificName` TEXT NULL DEFAULT NULL,
  PRIMARY KEY (`FoodID`),
  INDEX `FoodSourceID_idx` (`FoodSourceID` ASC) VISIBLE,
  INDEX `FoodGroupID_idx` (`FoodGroupID` ASC) VISIBLE,
  CONSTRAINT `FoodGroupID`
    FOREIGN KEY (`FoodGroupID`)
    REFERENCES `feedmeucalgary`.`food_group` (`FoodGroupID`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `feedmeucalgary`.`user`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `feedmeucalgary`.`user` ;

CREATE TABLE IF NOT EXISTS `feedmeucalgary`.`user` (
  `idUSER` INT(11) NOT NULL,
  `Name` VARCHAR(45) NULL DEFAULT NULL,
  `email` VARCHAR(45) NULL DEFAULT NULL,
  `pswd` VARCHAR(45) NULL DEFAULT NULL,
  PRIMARY KEY (`idUSER`),
  UNIQUE INDEX `idUSER_UNIQUE` (`idUSER` ASC) VISIBLE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `feedmeucalgary`.`is_restricted_by`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `feedmeucalgary`.`is_restricted_by` ;

CREATE TABLE IF NOT EXISTS `feedmeucalgary`.`is_restricted_by` (
  `USER_id` INT(11) NULL DEFAULT NULL,
  `RESTRICTION_id` INT(11) NULL DEFAULT NULL,
  INDEX `RESTRICTIONS_id_idx` (`RESTRICTION_id` ASC) VISIBLE,
  INDEX `USER_id_idx` (`USER_id` ASC) VISIBLE,
  CONSTRAINT `RESTRICTIONS_id`
    FOREIGN KEY (`RESTRICTION_id`)
    REFERENCES `feedmeucalgary`.`restriction` (`idRESTRICTION`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `USER_id`
    FOREIGN KEY (`USER_id`)
    REFERENCES `feedmeucalgary`.`user` (`idUSER`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `feedmeucalgary`.`made_of`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `feedmeucalgary`.`made_of` ;

CREATE TABLE IF NOT EXISTS `feedmeucalgary`.`made_of` (
  `FOOD_DISH_id` INT(11) NOT NULL,
  `INGREDIENT_id` INT(11) NULL DEFAULT NULL,
  PRIMARY KEY (`FOOD_DISH_id`),
  INDEX `INGREDIENT_id_idx` (`INGREDIENT_id` ASC) VISIBLE,
  CONSTRAINT `FOOD_DISH_id`
    FOREIGN KEY (`FOOD_DISH_id`)
    REFERENCES `feedmeucalgary`.`food_dish` (`idFOOD_DISH`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `INGREDIENT_fk`
    FOREIGN KEY (`INGREDIENT_id`)
    REFERENCES `feedmeucalgary`.`food_name` (`FoodID`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;