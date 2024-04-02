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

 Date: 12/02/2022 11:35:45
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
) ENGINE = InnoDB AUTO_INCREMENT = 191 CHARACTER SET = ascii COLLATE = ascii_bin ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of factura
-- ----------------------------
INSERT INTO `factura` VALUES (14, 15, '1123973', '5', 23, NULL);
INSERT INTO `factura` VALUES (15, 14, '1123973', '2', 19, NULL);
INSERT INTO `factura` VALUES (16, 21, '1123973', '2', 30, NULL);
INSERT INTO `factura` VALUES (17, 17, '1123973', '5', 26, NULL);
INSERT INTO `factura` VALUES (18, 18, '1123973', '6', 30, NULL);
INSERT INTO `factura` VALUES (19, 25, '1123973', '5', 33, NULL);
INSERT INTO `factura` VALUES (20, 27, '1123973', '6', 30, NULL);
INSERT INTO `factura` VALUES (21, 24, '1123973', '3', 27, NULL);
INSERT INTO `factura` VALUES (22, 20, '1123973', '6', 31, NULL);
INSERT INTO `factura` VALUES (23, 16, '1123973', '4', 25, NULL);
INSERT INTO `factura` VALUES (24, 19, '1123973', '6', 30, NULL);
INSERT INTO `factura` VALUES (25, 22, '1123973', '2', 24, NULL);
INSERT INTO `factura` VALUES (26, 23, '1123973', '4', 19, NULL);
INSERT INTO `factura` VALUES (27, 26, '1123973', '6', 26, NULL);
INSERT INTO `factura` VALUES (28, 16, '1123973', '4', 25, NULL);
INSERT INTO `factura` VALUES (29, 24, '1123973', '4', 27, NULL);
INSERT INTO `factura` VALUES (30, 43, 'bita12345', '3', 30, NULL);
INSERT INTO `factura` VALUES (31, 28, 'bita12345', '2', 21, NULL);
INSERT INTO `factura` VALUES (32, 30, 'bita12345', '2', 19, NULL);
INSERT INTO `factura` VALUES (33, 33, 'bita12345', '2', 26, NULL);
INSERT INTO `factura` VALUES (34, 34, 'bita12345', '2', 33, NULL);
INSERT INTO `factura` VALUES (35, 45, 'bita12345', '3', 19, NULL);
INSERT INTO `factura` VALUES (36, 40, 'bita12345', '3', 29, NULL);
INSERT INTO `factura` VALUES (37, 35, 'bita12345', '2', 27, NULL);
INSERT INTO `factura` VALUES (38, 46, 'bita12345', '3', 22, NULL);
INSERT INTO `factura` VALUES (39, 38, 'bita12345', '3', 24, NULL);
INSERT INTO `factura` VALUES (40, 47, 'bita12345', '3', 19, NULL);
INSERT INTO `factura` VALUES (41, 51, 'bita12345', '3', 24, NULL);
INSERT INTO `factura` VALUES (42, 50, 'bita12345', '3', 29, NULL);
INSERT INTO `factura` VALUES (43, 32, 'bita12345', '2', 29, NULL);
INSERT INTO `factura` VALUES (44, 31, 'bita12345', '2', 19, NULL);
INSERT INTO `factura` VALUES (45, 52, 'bita12345', '3', 28, NULL);
INSERT INTO `factura` VALUES (46, 54, 'bita12345', '3', 19, NULL);
INSERT INTO `factura` VALUES (47, 55, 'bita12345', '3', 28, NULL);
INSERT INTO `factura` VALUES (48, 53, 'bita12345', '3', 29, NULL);
INSERT INTO `factura` VALUES (49, 56, 'bita12345', '3', 28, NULL);
INSERT INTO `factura` VALUES (50, 58, 'bita12345', '4', 29, NULL);
INSERT INTO `factura` VALUES (51, 57, 'bita12345', '3', 34, NULL);
INSERT INTO `factura` VALUES (52, 59, 'bita12345', '3', 32, NULL);
INSERT INTO `factura` VALUES (53, 44, 'bita12345', '3', 27, NULL);
INSERT INTO `factura` VALUES (54, 48, 'bita12345', '3', 29, NULL);
INSERT INTO `factura` VALUES (55, 42, 'bita12345', '3', 24, NULL);
INSERT INTO `factura` VALUES (56, 29, 'bita12345', '5', 29, NULL);
INSERT INTO `factura` VALUES (57, 61, 'bita12345', '4', 26, NULL);
INSERT INTO `factura` VALUES (58, 36, 'bita12345', '3', 24, NULL);
INSERT INTO `factura` VALUES (59, 60, 'bita12345', '3', 19, NULL);
INSERT INTO `factura` VALUES (60, 68, 'bita12345', '4', 24, NULL);
INSERT INTO `factura` VALUES (61, 39, 'bita12345', '3', 31, NULL);
INSERT INTO `factura` VALUES (62, 66, 'bita12345', '4', 21, NULL);
INSERT INTO `factura` VALUES (63, 63, 'bita12345', '3', 24, NULL);
INSERT INTO `factura` VALUES (64, 37, 'bita12345', '3', 29, NULL);
INSERT INTO `factura` VALUES (65, 62, 'bita12345', '4', 29, NULL);
INSERT INTO `factura` VALUES (66, 67, 'bita12345', '3', 30, NULL);
INSERT INTO `factura` VALUES (67, 64, 'bita12345', '3', 26, NULL);
INSERT INTO `factura` VALUES (68, 65, 'bita12345', '3', 24, NULL);
INSERT INTO `factura` VALUES (69, 49, 'bita12345', '3', 39, NULL);
INSERT INTO `factura` VALUES (70, 69, 'bita12345', '3', 24, NULL);
INSERT INTO `factura` VALUES (71, 41, 'bita12345', '3', 26, NULL);
INSERT INTO `factura` VALUES (72, 70, 'bita12345', '4', 29, NULL);
INSERT INTO `factura` VALUES (73, 72, 'bita12345', '5', 38, NULL);
INSERT INTO `factura` VALUES (74, 71, 'bita12345', '4', 36, NULL);
INSERT INTO `factura` VALUES (75, 73, 'bita12345', '5', 30, NULL);
INSERT INTO `factura` VALUES (76, 74, 'bita12345', '5', 23, NULL);
INSERT INTO `factura` VALUES (77, 76, 'bita12345', '5', 29, NULL);
INSERT INTO `factura` VALUES (78, 77, 'bita12345', '5', 23, NULL);
INSERT INTO `factura` VALUES (79, 75, 'bita12345', '5', 19, NULL);
INSERT INTO `factura` VALUES (80, 78, 'bita12345', '5', 22, NULL);
INSERT INTO `factura` VALUES (81, 79, 'bita12345', '6', 23, NULL);
INSERT INTO `factura` VALUES (82, 80, 'bita12345', '6', 26, NULL);
INSERT INTO `factura` VALUES (83, 83, 'bita12345', '5', 34, NULL);
INSERT INTO `factura` VALUES (84, 81, 'bita12345', '5', 26, NULL);
INSERT INTO `factura` VALUES (85, 82, 'bita12345', '6', 25, NULL);
INSERT INTO `factura` VALUES (86, 41, 'bita12345', '4', 26, NULL);
INSERT INTO `factura` VALUES (87, 47, 'bita12345', '5', 19, NULL);
INSERT INTO `factura` VALUES (88, 29, 'bita12345', '6', 29, NULL);
INSERT INTO `factura` VALUES (89, 30, 'bita12345', '4', 19, NULL);
INSERT INTO `factura` VALUES (90, 36, 'bita12345', '4', 24, NULL);
INSERT INTO `factura` VALUES (91, 58, 'bita12345', '5', 29, NULL);
INSERT INTO `factura` VALUES (92, 52, 'bita12345', '5', 28, NULL);
INSERT INTO `factura` VALUES (93, 73, 'bita12345', '6', 30, NULL);
INSERT INTO `factura` VALUES (94, 42, 'bita12345', '4', 24, NULL);
INSERT INTO `factura` VALUES (95, 55, 'bita12345', '6', 28, NULL);
INSERT INTO `factura` VALUES (96, 33, 'bita12345', '2', 26, NULL);
INSERT INTO `factura` VALUES (97, 60, 'bita12345', '3', 19, NULL);
INSERT INTO `factura` VALUES (98, 67, 'bita12345', '4', 30, NULL);
INSERT INTO `factura` VALUES (99, 34, 'bita12345', '3', 33, NULL);
INSERT INTO `factura` VALUES (100, 82, 'bita12345', '6', 25, NULL);
INSERT INTO `factura` VALUES (101, 62, 'bita12345', '5', 29, NULL);
INSERT INTO `factura` VALUES (102, 45, 'bita12345', '6', 19, NULL);
INSERT INTO `factura` VALUES (103, 35, 'bita12345', '3', 27, NULL);
INSERT INTO `factura` VALUES (104, 31, 'bita12345', '3', 19, NULL);
INSERT INTO `factura` VALUES (105, 49, 'bita12345', '4', 39, NULL);
INSERT INTO `factura` VALUES (106, 65, 'bita12345', '4', 24, NULL);
INSERT INTO `factura` VALUES (107, 43, 'bita12345', '5', 30, NULL);
INSERT INTO `factura` VALUES (108, 69, 'bita12345', '4', 24, NULL);
INSERT INTO `factura` VALUES (109, 28, 'bita12345', '2', 21, NULL);
INSERT INTO `factura` VALUES (110, 41, 'bita12345', '5', 26, NULL);
INSERT INTO `factura` VALUES (111, 33, 'bita12345', '3', 26, NULL);
INSERT INTO `factura` VALUES (112, 67, 'bita12345', '5', 30, NULL);
INSERT INTO `factura` VALUES (113, 49, 'bita12345', '5', 39, NULL);
INSERT INTO `factura` VALUES (114, 35, 'bita12345', '6', 27, NULL);
INSERT INTO `factura` VALUES (115, 69, 'bita12345', '5', 24, NULL);
INSERT INTO `factura` VALUES (116, 28, 'bita12345', '3', 21, NULL);
INSERT INTO `factura` VALUES (117, 33, 'bita12345', '4', 26, NULL);
INSERT INTO `factura` VALUES (118, 28, 'bita12345', '4', 21, NULL);
INSERT INTO `factura` VALUES (119, 84, '1114362', '2', 23, NULL);
INSERT INTO `factura` VALUES (120, 87, '1114362', '6', 52, NULL);
INSERT INTO `factura` VALUES (121, 88, '1114362', '4', 29, NULL);
INSERT INTO `factura` VALUES (122, 89, '1114362', '6', 30, NULL);
INSERT INTO `factura` VALUES (123, 90, '1114362', '3', 29, NULL);
INSERT INTO `factura` VALUES (124, 91, '1114362', '3', 30, NULL);
INSERT INTO `factura` VALUES (125, 93, '1114362', '3', 26, NULL);
INSERT INTO `factura` VALUES (126, 86, '1114362', '2', 19, NULL);
INSERT INTO `factura` VALUES (127, 85, '1114362', '2', 19, NULL);
INSERT INTO `factura` VALUES (128, 92, '1114362', '2', 30, NULL);
INSERT INTO `factura` VALUES (129, 96, '1114362', '3', 37, NULL);
INSERT INTO `factura` VALUES (130, 95, '1114362', '5', 30, NULL);
INSERT INTO `factura` VALUES (131, 94, '1114362', '3', 23, NULL);
INSERT INTO `factura` VALUES (132, 97, '1114362', '6', 16, NULL);
INSERT INTO `factura` VALUES (133, 99, '1114362', '3', 29, NULL);
INSERT INTO `factura` VALUES (134, 98, '1114362', '4', 25, NULL);
INSERT INTO `factura` VALUES (135, 101, '1114362', '6', 21, NULL);
INSERT INTO `factura` VALUES (136, 100, '1114362', '2', 29, NULL);
INSERT INTO `factura` VALUES (137, 103, '1114362', '3', 19, NULL);
INSERT INTO `factura` VALUES (138, 102, '1114362', '2', 33, NULL);
INSERT INTO `factura` VALUES (139, 105, '1114362', '3', 37, NULL);
INSERT INTO `factura` VALUES (140, 104, '1114362', '4', 36, NULL);
INSERT INTO `factura` VALUES (141, 106, '1114362', '3', 24, NULL);
INSERT INTO `factura` VALUES (142, 107, '1114362', '4', 29, NULL);
INSERT INTO `factura` VALUES (143, 108, '1114362', '4', 30, NULL);
INSERT INTO `factura` VALUES (144, 111, '1114362', '3', 26, NULL);
INSERT INTO `factura` VALUES (145, 109, '1114362', '2', 26, NULL);
INSERT INTO `factura` VALUES (146, 110, '1114362', '2', 39, NULL);
INSERT INTO `factura` VALUES (147, 112, '1114362', '2', 29, NULL);
INSERT INTO `factura` VALUES (148, 115, '1114362', '3', 27, NULL);
INSERT INTO `factura` VALUES (149, 113, '1114362', '3', 29, NULL);
INSERT INTO `factura` VALUES (150, 114, '1114362', '2', 24, NULL);
INSERT INTO `factura` VALUES (151, 117, '1114362', '4', 35, NULL);
INSERT INTO `factura` VALUES (152, 118, '1114362', '4', 29, NULL);
INSERT INTO `factura` VALUES (153, 116, '1114362', '3', 39, NULL);
INSERT INTO `factura` VALUES (154, 91, '1114362', '4', 30, NULL);
INSERT INTO `factura` VALUES (155, 113, '1114362', '3', 29, NULL);
INSERT INTO `factura` VALUES (156, 84, '1114362', '4', 23, NULL);
INSERT INTO `factura` VALUES (157, 117, '1114362', '5', 35, NULL);
INSERT INTO `factura` VALUES (158, 107, '1114362', '5', 29, NULL);
INSERT INTO `factura` VALUES (159, 105, '1114362', '4', 37, NULL);
INSERT INTO `factura` VALUES (160, 93, '1114362', '4', 26, NULL);
INSERT INTO `factura` VALUES (161, 100, '1114362', '3', 29, NULL);
INSERT INTO `factura` VALUES (162, 111, '1114362', '3', 26, NULL);
INSERT INTO `factura` VALUES (163, 98, '1114362', '5', 25, NULL);
INSERT INTO `factura` VALUES (164, 99, '1114362', '4', 29, NULL);
INSERT INTO `factura` VALUES (165, 90, '1114362', '5', 29, NULL);
INSERT INTO `factura` VALUES (166, 108, '1114362', '4', 30, NULL);
INSERT INTO `factura` VALUES (167, 94, '1114362', '4', 23, NULL);
INSERT INTO `factura` VALUES (168, 95, '1114362', '6', 30, NULL);
INSERT INTO `factura` VALUES (169, 102, '1114362', '3', 33, NULL);
INSERT INTO `factura` VALUES (170, 112, '1114362', '2', 29, NULL);
INSERT INTO `factura` VALUES (171, 86, '1114362', '4', 19, NULL);
INSERT INTO `factura` VALUES (172, 101, '1114362', '6', 21, NULL);
INSERT INTO `factura` VALUES (173, 96, '1114362', '4', 37, NULL);
INSERT INTO `factura` VALUES (174, 110, '1114362', '3', 39, NULL);
INSERT INTO `factura` VALUES (175, 93, '1114362', '5', 26, NULL);
INSERT INTO `factura` VALUES (176, 102, '1114362', '4', 33, NULL);
INSERT INTO `factura` VALUES (177, 111, '1114362', '4', 26, NULL);
INSERT INTO `factura` VALUES (178, 112, '1114362', '3', 29, NULL);
INSERT INTO `factura` VALUES (179, 90, '1114362', '6', 29, NULL);
INSERT INTO `factura` VALUES (180, 113, '1114362', '4', 29, NULL);
INSERT INTO `factura` VALUES (181, 110, '1114362', '4', 39, NULL);
INSERT INTO `factura` VALUES (182, 111, '1114362', '4', 26, NULL);
INSERT INTO `factura` VALUES (183, 112, '1114362', '3', 29, NULL);
INSERT INTO `factura` VALUES (184, 113, '1114362', '4', 29, NULL);
INSERT INTO `factura` VALUES (185, 112, '1114362', '4', 29, NULL);
INSERT INTO `factura` VALUES (186, 113, '1114362', '5', 29, NULL);
INSERT INTO `factura` VALUES (187, 112, '1114362', '4', 29, NULL);
INSERT INTO `factura` VALUES (188, 112, '1114362', '5', 29, NULL);
INSERT INTO `factura` VALUES (189, 112, '1114362', '5', 29, NULL);
INSERT INTO `factura` VALUES (190, 112, '1114362', '6', 29, NULL);

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
INSERT INTO `imagen` VALUES ('PSW-1644325985284', 'https://pleaser.sa.metacdn.com/picxnw/moon-701-c.jpg', 'https://pleaser.sa.metacdn.com/picxnw/moon-701-c_t.jpg');
INSERT INTO `imagen` VALUES ('PSW-1644325985296', 'https://pleaser.sa.metacdn.com/picxnw/adore-789-rbbr.jpg', 'https://pleaser.sa.metacdn.com/picxnw/adore-789-rbbr_t.jpg');
INSERT INTO `imagen` VALUES ('PSW-1644325985314', 'https://pleaser.sa.metacdn.com/picxnw/sky-309tt-bbnhp.jpg', 'https://pleaser.sa.metacdn.com/picxnw/sky-309tt-bbnhp_t.jpg');
INSERT INTO `imagen` VALUES ('PSW-1644325985323', 'https://pleaser.sa.metacdn.com/picxnw/moon-708-c.jpg', 'https://pleaser.sa.metacdn.com/picxnw/moon-708-c_t.jpg');
INSERT INTO `imagen` VALUES ('PSW-1644325985331', 'https://pleaser.sa.metacdn.com/picxnw/sky-309lnrs-b.jpg', 'https://pleaser.sa.metacdn.com/picxnw/sky-309lnrs-b_t.jpg');
INSERT INTO `imagen` VALUES ('PSW-1644325985342', 'https://pleaser.sa.metacdn.com/picxnw/sky-301t-csmk.jpg', 'https://pleaser.sa.metacdn.com/picxnw/sky-301t-csmk_t.jpg');
INSERT INTO `imagen` VALUES ('PSW-1644325985347', 'https://pleaser.sa.metacdn.com/picxnw/adore-730-b.jpg', 'https://pleaser.sa.metacdn.com/picxnw/adore-730-b_t.jpg');
INSERT INTO `imagen` VALUES ('PSW-1644325985356', 'https://pleaser.sa.metacdn.com/picxnw/moon-708hb-cshg.jpg', 'https://pleaser.sa.metacdn.com/picxnw/moon-708hb-cshg_t.jpg');
INSERT INTO `imagen` VALUES ('PSW-1644325985367', 'https://pleaser.sa.metacdn.com/picxnw/delight-625-bfs.jpg', 'https://pleaser.sa.metacdn.com/picxnw/delight-625-bfs_t.jpg');
INSERT INTO `imagen` VALUES ('PSW-1644325985377', 'https://pleaser.sa.metacdn.com/picxnw/sky-308-cbc.jpg', 'https://pleaser.sa.metacdn.com/picxnw/sky-308-cbc_t.jpg');
INSERT INTO `imagen` VALUES ('PSW-1644325985388', 'https://pleaser.sa.metacdn.com/picxnw/sky-308g-t-cbrgi.jpg', 'https://pleaser.sa.metacdn.com/picxnw/sky-308g-t-cbrgi_t.jpg');
INSERT INTO `imagen` VALUES ('PSW-1644325985392', 'https://pleaser.sa.metacdn.com/picxnw/adore-709uvln-bnmc.jpg', 'https://pleaser.sa.metacdn.com/picxnw/adore-709uvln-bnmc_t.jpg');
INSERT INTO `imagen` VALUES ('PSW-1644325985403', 'https://pleaser.sa.metacdn.com/picxnw/sky-308t-csmk.jpg', 'https://pleaser.sa.metacdn.com/picxnw/sky-308t-csmk_t.jpg');
INSERT INTO `imagen` VALUES ('PSW-1644325985421', 'https://pleaser.sa.metacdn.com/picxnw/sky-308ln-cb.jpg', 'https://pleaser.sa.metacdn.com/picxnw/sky-308ln-cb_t.jpg');
INSERT INTO `imagen` VALUES ('PSW-1644632006099', 'https://pleaser.sa.metacdn.com/picxnw/adore-709srs-bnmc.jpg', 'https://pleaser.sa.metacdn.com/picxnw/adore-709srs-bnmc_t.jpg');
INSERT INTO `imagen` VALUES ('PSW-1644632006143', 'https://pleaser.sa.metacdn.com/picxnw/adore-709wr-brbowg.jpg', 'https://pleaser.sa.metacdn.com/picxnw/adore-709wr-brbowg_t.jpg');
INSERT INTO `imagen` VALUES ('PSW-1644632006206', 'https://pleaser.sa.metacdn.com/picxnw/sky-301-5-cbnw.jpg', 'https://pleaser.sa.metacdn.com/picxnw/sky-301-5-cbnw_t.jpg');
INSERT INTO `imagen` VALUES ('PSW-1644632006235', 'https://pleaser.sa.metacdn.com/picxnw/sky-309-b.jpg', 'https://pleaser.sa.metacdn.com/picxnw/sky-309-b_t.jpg');
INSERT INTO `imagen` VALUES ('PSW-1644632006264', 'https://pleaser.sa.metacdn.com/picxnw/sky-309lnrs-b.jpg', 'https://pleaser.sa.metacdn.com/picxnw/sky-309lnrs-b_t.jpg');
INSERT INTO `imagen` VALUES ('PSW-1644632006283', 'https://pleaser.sa.metacdn.com/picxnw/sky-309mg-b.jpg', 'https://pleaser.sa.metacdn.com/picxnw/sky-309mg-b_t.jpg');
INSERT INTO `imagen` VALUES ('PSW-1644632006309', 'https://pleaser.sa.metacdn.com/picxnw/stardust-708-cb.jpg', 'https://pleaser.sa.metacdn.com/picxnw/stardust-708-cb_t.jpg');
INSERT INTO `imagen` VALUES ('PSW-1644632006330', 'https://pleaser.sa.metacdn.com/picxnw/adore-701-b.jpg', 'https://pleaser.sa.metacdn.com/picxnw/adore-701-b_t.jpg');
INSERT INTO `imagen` VALUES ('PSW-1644632006360', 'https://pleaser.sa.metacdn.com/picxnw/adore-701srs-cb.jpg', 'https://pleaser.sa.metacdn.com/picxnw/adore-701srs-cb_t.jpg');
INSERT INTO `imagen` VALUES ('PSW-1644632006379', 'https://pleaser.sa.metacdn.com/picxnw/adore-708br-h-cbr.jpg', 'https://pleaser.sa.metacdn.com/picxnw/adore-708br-h-cbr_t.jpg');
INSERT INTO `imagen` VALUES ('PSW-1644632006396', 'https://pleaser.sa.metacdn.com/picxnw/adore-708chln-crogldch.jpg', 'https://pleaser.sa.metacdn.com/picxnw/adore-708chln-crogldch_t.jpg');
INSERT INTO `imagen` VALUES ('PSW-1644632006412', 'https://pleaser.sa.metacdn.com/picxnw/adore-708mct-clbl.jpg', 'https://pleaser.sa.metacdn.com/picxnw/adore-708mct-clbl_t.jpg');
INSERT INTO `imagen` VALUES ('PSW-1644632006434', 'https://pleaser.sa.metacdn.com/picxnw/adore-708mmg-c.jpg', 'https://pleaser.sa.metacdn.com/picxnw/adore-708mmg-c_t.jpg');
INSERT INTO `imagen` VALUES ('PSW-1644632006449', 'https://pleaser.sa.metacdn.com/picxnw/adore-708ombre-cemb.jpg', 'https://pleaser.sa.metacdn.com/picxnw/adore-708ombre-cemb_t.jpg');
INSERT INTO `imagen` VALUES ('PSW-1644632006496', 'https://pleaser.sa.metacdn.com/picxnw/adore-709br-h-bbr.jpg', 'https://pleaser.sa.metacdn.com/picxnw/adore-709br-h-bbr_t.jpg');
INSERT INTO `imagen` VALUES ('PSW-1644632006549', 'https://pleaser.sa.metacdn.com/picxnw/crystalize-308-cnhp.jpg', 'https://pleaser.sa.metacdn.com/picxnw/crystalize-308-cnhp_t.jpg');
INSERT INTO `imagen` VALUES ('PSW-1644632006572', 'https://pleaser.sa.metacdn.com/picxnw/esteem-709br-brb.jpg', 'https://pleaser.sa.metacdn.com/picxnw/esteem-709br-brb_t.jpg');
INSERT INTO `imagen` VALUES ('PSW-1644632006617', 'https://pleaser.sa.metacdn.com/picxnw/flamingo-809uvln-bnuvln.jpg', 'https://pleaser.sa.metacdn.com/picxnw/flamingo-809uvln-bnuvln_t.jpg');
INSERT INTO `imagen` VALUES ('PSW-1644632006660', 'https://pleaser.sa.metacdn.com/picxnw/lovethorn-708crs-cb.jpg', 'https://pleaser.sa.metacdn.com/picxnw/lovethorn-708crs-cb_t.jpg');
INSERT INTO `imagen` VALUES ('PSW-1644632006683', 'https://pleaser.sa.metacdn.com/picxnw/moon-708-cb.jpg', 'https://pleaser.sa.metacdn.com/picxnw/moon-708-cb_t.jpg');
INSERT INTO `imagen` VALUES ('PSW-1644632006702', 'https://pleaser.sa.metacdn.com/picxnw/moon-708gft-cpn.jpg', 'https://pleaser.sa.metacdn.com/picxnw/moon-708gft-cpn_t.jpg');
INSERT INTO `imagen` VALUES ('PSW-1644632006746', 'https://pleaser.sa.metacdn.com/picxnw/rainbow-309uv-b.jpg', 'https://pleaser.sa.metacdn.com/picxnw/rainbow-309uv-b_t.jpg');
INSERT INTO `imagen` VALUES ('PSW-1644632006766', 'https://pleaser.sa.metacdn.com/picxnw/sky-301-cbc.jpg', 'https://pleaser.sa.metacdn.com/picxnw/sky-301-cbc_t.jpg');
INSERT INTO `imagen` VALUES ('PSW-1644632006796', 'https://pleaser.sa.metacdn.com/picxnw/sky-301-5-cbnhp.jpg', 'https://pleaser.sa.metacdn.com/picxnw/sky-301-5-cbnhp_t.jpg');
INSERT INTO `imagen` VALUES ('PSW-1644632006815', 'https://pleaser.sa.metacdn.com/picxnw/sky-301t-csmk.jpg', 'https://pleaser.sa.metacdn.com/picxnw/sky-301t-csmk_t.jpg');
INSERT INTO `imagen` VALUES ('PSW-1644632006840', 'https://pleaser.sa.metacdn.com/picxnw/sky-302srs-cb.jpg', 'https://pleaser.sa.metacdn.com/picxnw/sky-302srs-cb_t.jpg');
INSERT INTO `imagen` VALUES ('PSW-1644632006881', 'https://pleaser.sa.metacdn.com/picxnw/sky-308cf-ccbpirig.jpg', 'https://pleaser.sa.metacdn.com/picxnw/sky-308cf-ccbpirig_t.jpg');
INSERT INTO `imagen` VALUES ('PSW-1644632006908', 'https://pleaser.sa.metacdn.com/picxnw/sky-308cp-1-cbsch.jpg', 'https://pleaser.sa.metacdn.com/picxnw/sky-308cp-1-cbsch_t.jpg');
INSERT INTO `imagen` VALUES ('PSW-1644632006928', 'https://pleaser.sa.metacdn.com/picxnw/sky-308ln-cb.jpg', 'https://pleaser.sa.metacdn.com/picxnw/sky-308ln-cb_t.jpg');
INSERT INTO `imagen` VALUES ('PSW-1644632006961', 'https://pleaser.sa.metacdn.com/picxnw/sky-308of-cs.jpg', 'https://pleaser.sa.metacdn.com/picxnw/sky-308of-cs_t.jpg');
INSERT INTO `imagen` VALUES ('PSW-1644632006981', 'https://pleaser.sa.metacdn.com/picxnw/sky-308t-csmk.jpg', 'https://pleaser.sa.metacdn.com/picxnw/sky-308t-csmk_t.jpg');
INSERT INTO `imagen` VALUES ('PSW-1644632007000', 'https://pleaser.sa.metacdn.com/picxnw/sky-308whg-cbrg.jpg', 'https://pleaser.sa.metacdn.com/picxnw/sky-308whg-cbrg_t.jpg');
INSERT INTO `imagen` VALUES ('PSW-1644632007051', 'https://pleaser.sa.metacdn.com/picxnw/stardust-702t-chpc.jpg', 'https://pleaser.sa.metacdn.com/picxnw/stardust-702t-chpc_t.jpg');
INSERT INTO `imagen` VALUES ('PSW-1644632007103', 'https://pleaser.sa.metacdn.com/picxnw/stardust-708t-cbc.jpg', 'https://pleaser.sa.metacdn.com/picxnw/stardust-708t-cbc_t.jpg');
INSERT INTO `imagen` VALUES ('PSW-1644632007131', 'https://pleaser.sa.metacdn.com/picxnw/stardust-708t-cppc.jpg', 'https://pleaser.sa.metacdn.com/picxnw/stardust-708t-cppc_t.jpg');
INSERT INTO `imagen` VALUES ('PSW-1644632007160', 'https://pleaser.sa.metacdn.com/picxnw/starsplash-701-cb.jpg', 'https://pleaser.sa.metacdn.com/picxnw/starsplash-701-cb_t.jpg');
INSERT INTO `imagen` VALUES ('PSW-1644632007170', 'https://pleaser.sa.metacdn.com/picxnw/adore-701ln-cb.jpg', 'https://pleaser.sa.metacdn.com/picxnw/adore-701ln-cb_t.jpg');
INSERT INTO `imagen` VALUES ('PSW-1644632007221', 'https://pleaser.sa.metacdn.com/picxnw/adore-708storm-cpnhg.jpg', 'https://pleaser.sa.metacdn.com/picxnw/adore-708storm-cpnhg_t.jpg');
INSERT INTO `imagen` VALUES ('PSW-1644632007244', 'https://pleaser.sa.metacdn.com/picxnw/adore-708t-2-skbptbc.jpg', 'https://pleaser.sa.metacdn.com/picxnw/adore-708t-2-skbptbc_t.jpg');
INSERT INTO `imagen` VALUES ('PSW-1644632007277', 'https://pleaser.sa.metacdn.com/picxnw/adore-708t-cr.jpg', 'https://pleaser.sa.metacdn.com/picxnw/adore-708t-cr_t.jpg');
INSERT INTO `imagen` VALUES ('PSW-1644632007317', 'https://pleaser.sa.metacdn.com/picxnw/adore-709-b.jpg', 'https://pleaser.sa.metacdn.com/picxnw/adore-709-b_t.jpg');
INSERT INTO `imagen` VALUES ('PSW-1644632007372', 'https://pleaser.sa.metacdn.com/picxnw/moon-701tg-cbs.jpg', 'https://pleaser.sa.metacdn.com/picxnw/moon-701tg-cbs_t.jpg');
INSERT INTO `imagen` VALUES ('PSW-1644632007402', 'https://pleaser.sa.metacdn.com/picxnw/rapture-808-c.jpg', 'https://pleaser.sa.metacdn.com/picxnw/rapture-808-c_t.jpg');
INSERT INTO `imagen` VALUES ('PSW-1644632007446', 'https://pleaser.sa.metacdn.com/picxnw/adore-701-3-cbpw.jpg', 'https://pleaser.sa.metacdn.com/picxnw/adore-701-3-cbpw_t.jpg');
INSERT INTO `imagen` VALUES ('PSW-1644632007478', 'https://pleaser.sa.metacdn.com/picxnw/adore-701-cb.jpg', 'https://pleaser.sa.metacdn.com/picxnw/adore-701-cb_t.jpg');
INSERT INTO `imagen` VALUES ('PSW-1644632007500', 'https://pleaser.sa.metacdn.com/picxnw/adore-709ls-b.jpg', 'https://pleaser.sa.metacdn.com/picxnw/adore-709ls-b_t.jpg');
INSERT INTO `imagen` VALUES ('PSW-1644632007530', 'https://pleaser.sa.metacdn.com/picxnw/adore-709sp-rspptb.jpg', 'https://pleaser.sa.metacdn.com/picxnw/adore-709sp-rspptb_t.jpg');
INSERT INTO `imagen` VALUES ('PSW-1644632007576', 'https://pleaser.sa.metacdn.com/picxnw/adore-709t-br.jpg', 'https://pleaser.sa.metacdn.com/picxnw/adore-709t-br_t.jpg');
INSERT INTO `imagen` VALUES ('PSW-1644632007640', 'https://pleaser.sa.metacdn.com/picxnw/knucks-709-b.jpg', 'https://pleaser.sa.metacdn.com/picxnw/knucks-709-b_t.jpg');
INSERT INTO `imagen` VALUES ('PSW-1644632007679', 'https://pleaser.sa.metacdn.com/picxnw/sky-308cp-3-cbsch.jpg', 'https://pleaser.sa.metacdn.com/picxnw/sky-308cp-3-cbsch_t.jpg');
INSERT INTO `imagen` VALUES ('PSW-1644632007697', 'https://pleaser.sa.metacdn.com/picxnw/sky-310sq-bpwch.jpg', 'https://pleaser.sa.metacdn.com/picxnw/sky-310sq-bpwch_t.jpg');
INSERT INTO `imagen` VALUES ('PSW-1644632007718', 'https://pleaser.sa.metacdn.com/picxnw/sky-334-bfs.jpg', 'https://pleaser.sa.metacdn.com/picxnw/sky-334-bfs_t.jpg');
INSERT INTO `imagen` VALUES ('PSW-1644632007732', 'https://pleaser.sa.metacdn.com/picxnw/stardust-708-c.jpg', 'https://pleaser.sa.metacdn.com/picxnw/stardust-708-c_t.jpg');
INSERT INTO `imagen` VALUES ('PSW-1644632007742', 'https://pleaser.sa.metacdn.com/picxnw/aspire-609-bc.jpg', 'https://pleaser.sa.metacdn.com/picxnw/aspire-609-bc_t.jpg');
INSERT INTO `imagen` VALUES ('PSW-1644632007762', 'https://pleaser.sa.metacdn.com/picxnw/delight-601-b.jpg', 'https://pleaser.sa.metacdn.com/picxnw/delight-601-b_t.jpg');
INSERT INTO `imagen` VALUES ('PSW-1644632007777', 'https://pleaser.sa.metacdn.com/picxnw/delight-609-b.jpg', 'https://pleaser.sa.metacdn.com/picxnw/delight-609-b_t.jpg');
INSERT INTO `imagen` VALUES ('PSW-1644633142985', 'https://pleaser.sa.metacdn.com/picxnw/adore-3000hwr-whg.jpg', 'https://pleaser.sa.metacdn.com/picxnw/adore-3000hwr-whg_t.jpg');
INSERT INTO `imagen` VALUES ('PSW-1644633143028', 'https://pleaser.sa.metacdn.com/picxnw/adore-701-cb.jpg', 'https://pleaser.sa.metacdn.com/picxnw/adore-701-cb_t.jpg');
INSERT INTO `imagen` VALUES ('PSW-1644633143059', 'https://pleaser.sa.metacdn.com/picxnw/adore-701fl-chp.jpg', 'https://pleaser.sa.metacdn.com/picxnw/adore-701fl-chp_t.jpg');
INSERT INTO `imagen` VALUES ('PSW-1644633143095', 'https://pleaser.sa.metacdn.com/picxnw/adore-701fl-cr.jpg', 'https://pleaser.sa.metacdn.com/picxnw/adore-701fl-cr_t.jpg');
INSERT INTO `imagen` VALUES ('PSW-1644633143117', 'https://pleaser.sa.metacdn.com/picxnw/adore-701srs-cb.jpg', 'https://pleaser.sa.metacdn.com/picxnw/adore-701srs-cb_t.jpg');
INSERT INTO `imagen` VALUES ('PSW-1644633143143', 'https://pleaser.sa.metacdn.com/picxnw/adore-708cg-cbg.jpg', 'https://pleaser.sa.metacdn.com/picxnw/adore-708cg-cbg_t.jpg');
INSERT INTO `imagen` VALUES ('PSW-1644633143169', 'https://pleaser.sa.metacdn.com/picxnw/adore-708cg-csg.jpg', 'https://pleaser.sa.metacdn.com/picxnw/adore-708cg-csg_t.jpg');
INSERT INTO `imagen` VALUES ('PSW-1644633143194', 'https://pleaser.sa.metacdn.com/picxnw/adore-708srs-cnmc.jpg', 'https://pleaser.sa.metacdn.com/picxnw/adore-708srs-cnmc_t.jpg');
INSERT INTO `imagen` VALUES ('PSW-1644633143247', 'https://pleaser.sa.metacdn.com/picxnw/adore-709-b.jpg', 'https://pleaser.sa.metacdn.com/picxnw/adore-709-b_t.jpg');
INSERT INTO `imagen` VALUES ('PSW-1644633143268', 'https://pleaser.sa.metacdn.com/picxnw/adore-709rc-crbowch.jpg', 'https://pleaser.sa.metacdn.com/picxnw/adore-709rc-crbowch_t.jpg');
INSERT INTO `imagen` VALUES ('PSW-1644633143287', 'https://pleaser.sa.metacdn.com/picxnw/adore-709uvln-bnmc.jpg', 'https://pleaser.sa.metacdn.com/picxnw/adore-709uvln-bnmc_t.jpg');
INSERT INTO `imagen` VALUES ('PSW-1644633143311', 'https://pleaser.sa.metacdn.com/picxnw/captiva-609-bc.jpg', 'https://pleaser.sa.metacdn.com/picxnw/captiva-609-bc_t.jpg');
INSERT INTO `imagen` VALUES ('PSW-1644633143330', 'https://pleaser.sa.metacdn.com/picxnw/classique-20-blsa.jpg', 'https://pleaser.sa.metacdn.com/picxnw/classique-20-blsa_t.jpg');
INSERT INTO `imagen` VALUES ('PSW-1644633143350', 'https://pleaser.sa.metacdn.com/picxnw/crystalize-308-cntgr.jpg', 'https://pleaser.sa.metacdn.com/picxnw/crystalize-308-cntgr_t.jpg');
INSERT INTO `imagen` VALUES ('PSW-1644633143375', 'https://pleaser.sa.metacdn.com/picxnw/delight-600-17-bels.jpg', 'https://pleaser.sa.metacdn.com/picxnw/delight-600-17-bels_t.jpg');
INSERT INTO `imagen` VALUES ('PSW-1644633143422', 'https://pleaser.sa.metacdn.com/picxnw/delight-634-bfs.jpg', 'https://pleaser.sa.metacdn.com/picxnw/delight-634-bfs_t.jpg');
INSERT INTO `imagen` VALUES ('PSW-1644633143442', 'https://pleaser.sa.metacdn.com/picxnw/flamingo-801t-csmk.jpg', 'https://pleaser.sa.metacdn.com/picxnw/flamingo-801t-csmk_t.jpg');
INSERT INTO `imagen` VALUES ('PSW-1644633143509', 'https://pleaser.sa.metacdn.com/picxnw/moon-701hrs-cbr.jpg', 'https://pleaser.sa.metacdn.com/picxnw/moon-701hrs-cbr_t.jpg');
INSERT INTO `imagen` VALUES ('PSW-1644633143553', 'https://pleaser.sa.metacdn.com/picxnw/moon-708dia-c.jpg', 'https://pleaser.sa.metacdn.com/picxnw/moon-708dia-c_t.jpg');
INSERT INTO `imagen` VALUES ('PSW-1644633143573', 'https://pleaser.sa.metacdn.com/picxnw/moon-708hrs-ccr.jpg', 'https://pleaser.sa.metacdn.com/picxnw/moon-708hrs-ccr_t.jpg');
INSERT INTO `imagen` VALUES ('PSW-1644633143594', 'https://pleaser.sa.metacdn.com/picxnw/moon-708sk-cbpw.jpg', 'https://pleaser.sa.metacdn.com/picxnw/moon-708sk-cbpw_t.jpg');
INSERT INTO `imagen` VALUES ('PSW-1644633143618', 'https://pleaser.sa.metacdn.com/picxnw/moon-709cat-bbs.jpg', 'https://pleaser.sa.metacdn.com/picxnw/moon-709cat-bbs_t.jpg');
INSERT INTO `imagen` VALUES ('PSW-1644633143642', 'https://pleaser.sa.metacdn.com/picxnw/scallop-708-2rs-cbpwrs.jpg', 'https://pleaser.sa.metacdn.com/picxnw/scallop-708-2rs-cbpwrs_t.jpg');
INSERT INTO `imagen` VALUES ('PSW-1644633143692', 'https://pleaser.sa.metacdn.com/picxnw/sky-301t-csmk.jpg', 'https://pleaser.sa.metacdn.com/picxnw/sky-301t-csmk_t.jpg');
INSERT INTO `imagen` VALUES ('PSW-1644633143724', 'https://pleaser.sa.metacdn.com/picxnw/sky-308t-csmk.jpg', 'https://pleaser.sa.metacdn.com/picxnw/sky-308t-csmk_t.jpg');
INSERT INTO `imagen` VALUES ('PSW-1644633143762', 'https://pleaser.sa.metacdn.com/picxnw/sky-308uvmg-pnt.jpg', 'https://pleaser.sa.metacdn.com/picxnw/sky-308uvmg-pnt_t.jpg');
INSERT INTO `imagen` VALUES ('PSW-1644633143805', 'https://pleaser.sa.metacdn.com/picxnw/sky-308whg-ccbpg.jpg', 'https://pleaser.sa.metacdn.com/picxnw/sky-308whg-ccbpg_t.jpg');
INSERT INTO `imagen` VALUES ('PSW-1644633143828', 'https://pleaser.sa.metacdn.com/picxnw/sky-309gpt-bsmk.jpg', 'https://pleaser.sa.metacdn.com/picxnw/sky-309gpt-bsmk_t.jpg');
INSERT INTO `imagen` VALUES ('PSW-1644633143856', 'https://pleaser.sa.metacdn.com/picxnw/sky-309mg-b.jpg', 'https://pleaser.sa.metacdn.com/picxnw/sky-309mg-b_t.jpg');
INSERT INTO `imagen` VALUES ('PSW-1644633143889', 'https://pleaser.sa.metacdn.com/picxnw/sky-334-bfs.jpg', 'https://pleaser.sa.metacdn.com/picxnw/sky-334-bfs_t.jpg');
INSERT INTO `imagen` VALUES ('PSW-1644633143916', 'https://pleaser.sa.metacdn.com/picxnw/starsplash-701-cb.jpg', 'https://pleaser.sa.metacdn.com/picxnw/starsplash-701-cb_t.jpg');
INSERT INTO `imagen` VALUES ('PSW-1644633143955', 'https://pleaser.sa.metacdn.com/picxnw/taboo-708mg-c.jpg', 'https://pleaser.sa.metacdn.com/picxnw/taboo-708mg-c_t.jpg');
INSERT INTO `imagen` VALUES ('PSW-1644633143991', 'https://pleaser.sa.metacdn.com/picxnw/tipjar-708-5-cbg.jpg', 'https://pleaser.sa.metacdn.com/picxnw/tipjar-708-5-cbg_t.jpg');
INSERT INTO `imagen` VALUES ('PSW-1644633144016', 'https://pleaser.sa.metacdn.com/picxnw/unicorn-708t-cbgumpn.jpg', 'https://pleaser.sa.metacdn.com/picxnw/unicorn-708t-cbgumpn_t.jpg');
INSERT INTO `imagen` VALUES ('PSW-1644633144038', 'https://pleaser.sa.metacdn.com/picxnw/unicorn-708t-cbu.jpg', 'https://pleaser.sa.metacdn.com/picxnw/unicorn-708t-cbu_t.jpg');

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
  PRIMARY KEY (`idInventario`) USING BTREE,
  INDEX `idModeloFk_2`(`idModelo`) USING BTREE,
  INDEX `idImagenFk`(`idImagen`) USING BTREE,
  INDEX `idFacturaFk`(`idFactura`) USING BTREE,
  CONSTRAINT `idFacturaFk` FOREIGN KEY (`idFactura`) REFERENCES `factura` (`idFactura`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `idImagenFk` FOREIGN KEY (`idImagen`) REFERENCES `imagen` (`idImagen`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `idModeloFk_2` FOREIGN KEY (`idModelo`) REFERENCES `modelo` (`idModelo`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB AUTO_INCREMENT = 182 CHARACTER SET = ascii COLLATE = ascii_bin ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of inventario
-- ----------------------------
INSERT INTO `inventario` VALUES (5, 15, 'PSW-1644325985296', 14, 5, 23, 75, 1724, 100, 0);
INSERT INTO `inventario` VALUES (6, 14, 'PSW-1644325985284', 15, 2, 19, 67, 1540, 100, 0);
INSERT INTO `inventario` VALUES (7, 20, 'PSW-1644325985347', 22, 6, 31, 94, 2161, 100, 0);
INSERT INTO `inventario` VALUES (8, 17, 'PSW-1644325985356', 17, 5, 26, 76, 1747, 100, 0);
INSERT INTO `inventario` VALUES (9, 21, 'PSW-1644325985367', 16, 2, 30, 94, 2161, 100, 0);
INSERT INTO `inventario` VALUES (10, 24, 'PSW-1644325985331', 21, 3, 27, 78, 1793, 100, 0);
INSERT INTO `inventario` VALUES (11, 18, 'PSW-1644325985403', 18, 6, 30, 92, 2115, 100, 0);
INSERT INTO `inventario` VALUES (12, 25, 'PSW-1644325985388', 19, 5, 33, 100, 2299, 100, 0);
INSERT INTO `inventario` VALUES (13, 16, 'PSW-1644325985392', 23, 4, 25, 75, 1724, 100, 0);
INSERT INTO `inventario` VALUES (14, 27, 'PSW-1644325985314', 20, 6, 30, 92, 2115, 100, 0);
INSERT INTO `inventario` VALUES (15, 23, 'PSW-1644325985342', 26, 4, 19, 68, 1563, 100, 0);
INSERT INTO `inventario` VALUES (16, 19, 'PSW-1644325985323', 24, 6, 30, 92, 2115, 100, 0);
INSERT INTO `inventario` VALUES (17, 22, 'PSW-1644325985421', 25, 2, 24, 74, 1701, 100, 0);
INSERT INTO `inventario` VALUES (18, 26, 'PSW-1644325985377', 27, 6, 26, 84, 1931, 100, 0);
INSERT INTO `inventario` VALUES (19, 16, 'PSW-1644325985392', 28, 4, 25, 75, 1724, 100, 0);
INSERT INTO `inventario` VALUES (20, 24, 'PSW-1644325985331', 29, 4, 27, 78, 1793, 100, 0);
INSERT INTO `inventario` VALUES (21, 43, 'PSW-1644632006360', 30, 3, 30, 92, 2115, 100, 0);
INSERT INTO `inventario` VALUES (22, 82, 'PSW-1644632007777', 85, 6, 25, 78, 1793, 100, 0);
INSERT INTO `inventario` VALUES (23, 37, 'PSW-1644632006396', 64, 3, 29, 82, 1885, 100, 0);
INSERT INTO `inventario` VALUES (24, 58, 'PSW-1644632007170', 50, 4, 29, 90, 2069, 100, 0);
INSERT INTO `inventario` VALUES (25, 34, 'PSW-1644632006309', 34, 2, 33, 94, 2161, 100, 0);
INSERT INTO `inventario` VALUES (26, 31, 'PSW-1644632006206', 44, 2, 19, 67, 1540, 100, 0);
INSERT INTO `inventario` VALUES (27, 35, 'PSW-1644632006264', 37, 2, 27, 78, 1793, 100, 0);
INSERT INTO `inventario` VALUES (28, 38, 'PSW-1644632006412', 39, 3, 24, 72, 1655, 100, 0);
INSERT INTO `inventario` VALUES (29, 49, 'PSW-1644632007000', 69, 3, 39, 112, 2575, 100, 0);
INSERT INTO `inventario` VALUES (30, 39, 'PSW-1644632006434', 61, 3, 31, 94, 2161, 100, 0);
INSERT INTO `inventario` VALUES (31, 63, 'PSW-1644632006928', 63, 3, 24, 74, 1701, 100, 0);
INSERT INTO `inventario` VALUES (32, 40, 'PSW-1644632006549', 36, 3, 29, 80, 1839, 100, 0);
INSERT INTO `inventario` VALUES (33, 83, 'PSW-1644632007732', 83, 5, 34, 96, 2207, 100, 0);
INSERT INTO `inventario` VALUES (34, 47, 'PSW-1644632006815', 40, 3, 19, 68, 1563, 100, 0);
INSERT INTO `inventario` VALUES (35, 80, 'PSW-1644632007742', 82, 6, 26, 84, 1931, 100, 0);
INSERT INTO `inventario` VALUES (36, 64, 'PSW-1644632007131', 67, 3, 26, 74, 1701, 100, 0);
INSERT INTO `inventario` VALUES (37, 66, 'PSW-1644632007372', 62, 4, 21, 71, 1632, 100, 0);
INSERT INTO `inventario` VALUES (38, 79, 'PSW-1644632007762', 81, 6, 23, 74, 1701, 100, 0);
INSERT INTO `inventario` VALUES (39, 59, 'PSW-1644632006746', 52, 3, 32, 96, 2207, 100, 0);
INSERT INTO `inventario` VALUES (40, 68, 'PSW-1644632007221', 60, 4, 24, 74, 1701, 100, 0);
INSERT INTO `inventario` VALUES (41, 75, 'PSW-1644632007679', 79, 5, 19, 63, 1448, 100, 0);
INSERT INTO `inventario` VALUES (42, 29, 'PSW-1644632007640', 56, 5, 29, 92, 2115, 100, 0);
INSERT INTO `inventario` VALUES (43, 46, 'PSW-1644632007051', 38, 3, 22, 69, 1586, 100, 0);
INSERT INTO `inventario` VALUES (44, 54, 'PSW-1644632006702', 46, 3, 19, 68, 1563, 100, 0);
INSERT INTO `inventario` VALUES (45, 36, 'PSW-1644632006449', 58, 3, 24, 72, 1655, 100, 0);
INSERT INTO `inventario` VALUES (46, 50, 'PSW-1644632006660', 42, 3, 29, 76, 1747, 100, 0);
INSERT INTO `inventario` VALUES (47, 28, 'PSW-1644632006143', 31, 2, 21, 70, 1609, 100, 0);
INSERT INTO `inventario` VALUES (48, 41, 'PSW-1644632006840', 71, 3, 26, 76, 1747, 100, 0);
INSERT INTO `inventario` VALUES (49, 74, 'PSW-1644632007478', 76, 5, 23, 76, 1747, 100, 0);
INSERT INTO `inventario` VALUES (50, 78, 'PSW-1644632007576', 80, 5, 22, 71, 1632, 100, 0);
INSERT INTO `inventario` VALUES (51, 65, 'PSW-1644632006572', 68, 3, 24, 74, 1701, 100, 0);
INSERT INTO `inventario` VALUES (52, 81, 'PSW-1644632007697', 84, 5, 26, 71, 1632, 100, 0);
INSERT INTO `inventario` VALUES (53, 70, 'PSW-1644632007277', 72, 4, 29, 92, 2115, 100, 0);
INSERT INTO `inventario` VALUES (54, 73, 'PSW-1644632007500', 75, 5, 30, 92, 2115, 100, 0);
INSERT INTO `inventario` VALUES (55, 44, 'PSW-1644632006379', 53, 3, 27, 88, 2023, 100, 0);
INSERT INTO `inventario` VALUES (56, 56, 'PSW-1644632006683', 49, 3, 28, 90, 2069, 100, 0);
INSERT INTO `inventario` VALUES (57, 60, 'PSW-1644632006908', 59, 3, 19, 63, 1448, 100, 0);
INSERT INTO `inventario` VALUES (58, 55, 'PSW-1644632006496', 47, 3, 28, 90, 2069, 100, 0);
INSERT INTO `inventario` VALUES (59, 45, 'PSW-1644632006796', 35, 3, 19, 67, 1540, 100, 0);
INSERT INTO `inventario` VALUES (60, 67, 'PSW-1644632006981', 66, 3, 30, 92, 2115, 100, 0);
INSERT INTO `inventario` VALUES (61, 57, 'PSW-1644632007103', 51, 3, 34, 96, 2207, 100, 0);
INSERT INTO `inventario` VALUES (62, 71, 'PSW-1644632007402', 74, 4, 36, 109, 2506, 100, 0);
INSERT INTO `inventario` VALUES (63, 52, 'PSW-1644632006881', 45, 3, 28, 79, 1816, 100, 0);
INSERT INTO `inventario` VALUES (64, 30, 'PSW-1644632006099', 32, 2, 19, 62, 1425, 100, 0);
INSERT INTO `inventario` VALUES (65, 77, 'PSW-1644632007530', 78, 5, 23, 72, 1655, 100, 0);
INSERT INTO `inventario` VALUES (66, 76, 'PSW-1644632007718', 77, 5, 29, 92, 2115, 100, 0);
INSERT INTO `inventario` VALUES (67, 72, 'PSW-1644632007446', 73, 5, 38, 111, 2552, 100, 0);
INSERT INTO `inventario` VALUES (68, 69, 'PSW-1644632006766', 70, 3, 24, 78, 1793, 100, 0);
INSERT INTO `inventario` VALUES (69, 33, 'PSW-1644632006235', 33, 2, 26, 84, 1931, 100, 0);
INSERT INTO `inventario` VALUES (70, 51, 'PSW-1644632007160', 41, 3, 24, 70, 1609, 100, 0);
INSERT INTO `inventario` VALUES (71, 32, 'PSW-1644632006283', 43, 2, 29, 90, 2069, 100, 0);
INSERT INTO `inventario` VALUES (72, 62, 'PSW-1644632007244', 65, 4, 29, 92, 2115, 100, 0);
INSERT INTO `inventario` VALUES (73, 48, 'PSW-1644632006617', 54, 3, 29, 82, 1885, 100, 0);
INSERT INTO `inventario` VALUES (74, 61, 'PSW-1644632007317', 57, 4, 26, 84, 1931, 100, 0);
INSERT INTO `inventario` VALUES (75, 53, 'PSW-1644632006961', 48, 3, 29, 82, 1885, 100, 0);
INSERT INTO `inventario` VALUES (76, 42, 'PSW-1644632006330', 55, 3, 24, 80, 1839, 100, 0);
INSERT INTO `inventario` VALUES (77, 30, 'PSW-1644632006099', 89, 4, 19, 62, 1425, 100, 0);
INSERT INTO `inventario` VALUES (78, 41, 'PSW-1644632006840', 86, 4, 26, 76, 1747, 100, 0);
INSERT INTO `inventario` VALUES (79, 36, 'PSW-1644632006449', 90, 4, 24, 72, 1655, 100, 0);
INSERT INTO `inventario` VALUES (80, 52, 'PSW-1644632006881', 92, 5, 28, 79, 1816, 100, 0);
INSERT INTO `inventario` VALUES (81, 29, 'PSW-1644632007640', 88, 6, 29, 92, 2115, 100, 0);
INSERT INTO `inventario` VALUES (82, 47, 'PSW-1644632006815', 87, 5, 19, 68, 1563, 100, 0);
INSERT INTO `inventario` VALUES (83, 58, 'PSW-1644632007170', 91, 5, 29, 90, 2069, 100, 0);
INSERT INTO `inventario` VALUES (84, 55, 'PSW-1644632006496', 95, 6, 28, 90, 2069, 100, 0);
INSERT INTO `inventario` VALUES (85, 73, 'PSW-1644632007500', 93, 6, 30, 92, 2115, 100, 0);
INSERT INTO `inventario` VALUES (86, 42, 'PSW-1644632006330', 94, 4, 24, 80, 1839, 100, 0);
INSERT INTO `inventario` VALUES (87, 33, 'PSW-1644632006235', 96, 2, 26, 84, 1931, 100, 0);
INSERT INTO `inventario` VALUES (88, 60, 'PSW-1644632006908', 97, 3, 19, 63, 1448, 100, 0);
INSERT INTO `inventario` VALUES (89, 67, 'PSW-1644632006981', 98, 4, 30, 92, 2115, 100, 0);
INSERT INTO `inventario` VALUES (90, 62, 'PSW-1644632007244', 101, 5, 29, 92, 2115, 100, 0);
INSERT INTO `inventario` VALUES (91, 45, 'PSW-1644632006796', 102, 6, 19, 67, 1540, 100, 0);
INSERT INTO `inventario` VALUES (92, 34, 'PSW-1644632006309', 99, 3, 33, 94, 2161, 100, 0);
INSERT INTO `inventario` VALUES (93, 82, 'PSW-1644632007777', 100, 6, 25, 78, 1793, 100, 0);
INSERT INTO `inventario` VALUES (94, 31, 'PSW-1644632006206', 104, 3, 19, 67, 1540, 100, 0);
INSERT INTO `inventario` VALUES (95, 49, 'PSW-1644632007000', 105, 4, 39, 112, 2575, 100, 0);
INSERT INTO `inventario` VALUES (96, 35, 'PSW-1644632006264', 103, 3, 27, 78, 1793, 100, 0);
INSERT INTO `inventario` VALUES (97, 65, 'PSW-1644632006572', 106, 4, 24, 74, 1701, 100, 0);
INSERT INTO `inventario` VALUES (98, 69, 'PSW-1644632006766', 108, 4, 24, 78, 1793, 100, 0);
INSERT INTO `inventario` VALUES (99, 43, 'PSW-1644632006360', 107, 5, 30, 92, 2115, 100, 0);
INSERT INTO `inventario` VALUES (100, 28, 'PSW-1644632006143', 109, 2, 21, 70, 1609, 100, 0);
INSERT INTO `inventario` VALUES (101, 41, 'PSW-1644632006840', 110, 5, 26, 76, 1747, 100, 0);
INSERT INTO `inventario` VALUES (102, 35, 'PSW-1644632006264', 114, 6, 27, 78, 1793, 100, 0);
INSERT INTO `inventario` VALUES (103, 49, 'PSW-1644632007000', 113, 5, 39, 112, 2575, 100, 0);
INSERT INTO `inventario` VALUES (104, 33, 'PSW-1644632006235', 111, 3, 26, 84, 1931, 100, 0);
INSERT INTO `inventario` VALUES (105, 67, 'PSW-1644632006981', 112, 5, 30, 92, 2115, 100, 0);
INSERT INTO `inventario` VALUES (106, 69, 'PSW-1644632006766', 115, 5, 24, 78, 1793, 100, 0);
INSERT INTO `inventario` VALUES (107, 28, 'PSW-1644632006143', 116, 3, 21, 70, 1609, 100, 0);
INSERT INTO `inventario` VALUES (108, 33, 'PSW-1644632006235', 117, 4, 26, 84, 1931, 100, 0);
INSERT INTO `inventario` VALUES (109, 28, 'PSW-1644632006143', 118, 4, 21, 70, 1609, 100, 0);
INSERT INTO `inventario` VALUES (110, 109, 'PSW-1644633143762', 145, 2, 26, 75, 1724, 100, 0);
INSERT INTO `inventario` VALUES (111, 84, 'PSW-1644633143028', 119, 2, 23, 76, 1747, 100, 0);
INSERT INTO `inventario` VALUES (112, 114, 'PSW-1644633143916', 150, 2, 24, 70, 1609, 100, 0);
INSERT INTO `inventario` VALUES (113, 91, 'PSW-1644633143169', 124, 3, 30, 94, 2161, 100, 0);
INSERT INTO `inventario` VALUES (114, 118, 'PSW-1644633144038', 152, 4, 29, 76, 1747, 100, 0);
INSERT INTO `inventario` VALUES (115, 113, 'PSW-1644633143889', 149, 3, 29, 92, 2115, 100, 0);
INSERT INTO `inventario` VALUES (116, 107, 'PSW-1644633143642', 142, 4, 29, 80, 1839, 100, 0);
INSERT INTO `inventario` VALUES (117, 102, 'PSW-1644633143509', 138, 2, 33, 100, 2299, 100, 0);
INSERT INTO `inventario` VALUES (118, 104, 'PSW-1644633143553', 140, 4, 36, 109, 2506, 100, 0);
INSERT INTO `inventario` VALUES (119, 117, 'PSW-1644633143991', 151, 4, 35, 109, 2506, 100, 0);
INSERT INTO `inventario` VALUES (120, 98, 'PSW-1644633143287', 134, 4, 25, 75, 1724, 100, 0);
INSERT INTO `inventario` VALUES (121, 92, 'PSW-1644633143143', 128, 2, 30, 94, 2161, 100, 0);
INSERT INTO `inventario` VALUES (122, 110, 'PSW-1644633143805', 146, 2, 39, 112, 2575, 100, 0);
INSERT INTO `inventario` VALUES (123, 85, 'PSW-1644633143618', 127, 2, 19, 68, 1563, 100, 0);
INSERT INTO `inventario` VALUES (124, 115, 'PSW-1644633143955', 148, 3, 27, 78, 1793, 100, 0);
INSERT INTO `inventario` VALUES (125, 100, 'PSW-1644633143375', 136, 2, 29, 83, 1908, 100, 0);
INSERT INTO `inventario` VALUES (126, 108, 'PSW-1644633143724', 143, 4, 30, 92, 2115, 100, 0);
INSERT INTO `inventario` VALUES (127, 112, 'PSW-1644633143856', 147, 2, 29, 90, 2069, 100, 0);
INSERT INTO `inventario` VALUES (128, 96, 'PSW-1644633143268', 129, 3, 37, 111, 2552, 100, 0);
INSERT INTO `inventario` VALUES (129, 90, 'PSW-1644633143059', 123, 3, 29, 90, 2069, 100, 0);
INSERT INTO `inventario` VALUES (130, 95, 'PSW-1644633143311', 130, 5, 30, 90, 2069, 100, 0);
INSERT INTO `inventario` VALUES (131, 101, 'PSW-1644633143422', 135, 6, 21, 70, 1609, 100, 0);
INSERT INTO `inventario` VALUES (132, 94, 'PSW-1644633143194', 131, 3, 23, 71, 1632, 100, 0);
INSERT INTO `inventario` VALUES (133, 103, 'PSW-1644633143442', 137, 3, 19, 68, 1563, 100, 0);
INSERT INTO `inventario` VALUES (134, 88, 'PSW-1644633143095', 121, 4, 29, 90, 2069, 100, 0);
INSERT INTO `inventario` VALUES (135, 106, 'PSW-1644633143594', 141, 3, 24, 74, 1701, 100, 0);
INSERT INTO `inventario` VALUES (136, 86, 'PSW-1644633143692', 126, 2, 19, 68, 1563, 100, 0);
INSERT INTO `inventario` VALUES (137, 116, 'PSW-1644633144016', 153, 3, 39, 112, 2575, 100, 0);
INSERT INTO `inventario` VALUES (138, 87, 'PSW-1644633142985', 120, 6, 52, 137, 3150, 100, 0);
INSERT INTO `inventario` VALUES (139, 111, 'PSW-1644633143828', 144, 3, 26, 76, 1747, 100, 0);
INSERT INTO `inventario` VALUES (140, 97, 'PSW-1644633143330', 132, 6, 16, 61, 1402, 100, 0);
INSERT INTO `inventario` VALUES (141, 93, 'PSW-1644633143247', 125, 3, 26, 84, 1931, 100, 0);
INSERT INTO `inventario` VALUES (142, 105, 'PSW-1644633143573', 139, 3, 37, 111, 2552, 100, 0);
INSERT INTO `inventario` VALUES (143, 99, 'PSW-1644633143350', 133, 3, 29, 80, 1839, 100, 0);
INSERT INTO `inventario` VALUES (144, 89, 'PSW-1644633143117', 122, 6, 30, 92, 2115, 100, 0);
INSERT INTO `inventario` VALUES (145, 93, 'PSW-1644633143247', 160, 4, 26, 84, 1931, 100, 0);
INSERT INTO `inventario` VALUES (146, 99, 'PSW-1644633143350', 164, 4, 29, 80, 1839, 100, 0);
INSERT INTO `inventario` VALUES (147, 102, 'PSW-1644633143509', 169, 3, 33, 100, 2299, 100, 0);
INSERT INTO `inventario` VALUES (148, 91, 'PSW-1644633143169', 154, 4, 30, 94, 2161, 100, 0);
INSERT INTO `inventario` VALUES (149, 113, 'PSW-1644633143889', 155, 3, 29, 92, 2115, 100, 0);
INSERT INTO `inventario` VALUES (150, 117, 'PSW-1644633143991', 157, 5, 35, 109, 2506, 100, 0);
INSERT INTO `inventario` VALUES (151, 84, 'PSW-1644633143028', 156, 4, 23, 76, 1747, 100, 0);
INSERT INTO `inventario` VALUES (152, 107, 'PSW-1644633143642', 158, 5, 29, 80, 1839, 100, 0);
INSERT INTO `inventario` VALUES (153, 100, 'PSW-1644633143375', 161, 3, 29, 83, 1908, 100, 0);
INSERT INTO `inventario` VALUES (154, 105, 'PSW-1644633143573', 159, 4, 37, 111, 2552, 100, 0);
INSERT INTO `inventario` VALUES (155, 111, 'PSW-1644633143828', 162, 3, 26, 76, 1747, 100, 0);
INSERT INTO `inventario` VALUES (156, 98, 'PSW-1644633143287', 163, 5, 25, 75, 1724, 100, 0);
INSERT INTO `inventario` VALUES (157, 90, 'PSW-1644633143059', 165, 5, 29, 90, 2069, 100, 0);
INSERT INTO `inventario` VALUES (158, 108, 'PSW-1644633143724', 166, 4, 30, 92, 2115, 100, 0);
INSERT INTO `inventario` VALUES (159, 94, 'PSW-1644633143194', 167, 4, 23, 71, 1632, 100, 0);
INSERT INTO `inventario` VALUES (160, 95, 'PSW-1644633143311', 168, 6, 30, 90, 2069, 100, 0);
INSERT INTO `inventario` VALUES (161, 112, 'PSW-1644633143856', 170, 2, 29, 90, 2069, 100, 0);
INSERT INTO `inventario` VALUES (162, 86, 'PSW-1644633143692', 171, 4, 19, 68, 1563, 100, 0);
INSERT INTO `inventario` VALUES (163, 110, 'PSW-1644633143805', 174, 3, 39, 112, 2575, 100, 0);
INSERT INTO `inventario` VALUES (164, 101, 'PSW-1644633143422', 172, 6, 21, 70, 1609, 100, 0);
INSERT INTO `inventario` VALUES (165, 96, 'PSW-1644633143268', 173, 4, 37, 111, 2552, 100, 0);
INSERT INTO `inventario` VALUES (166, 93, 'PSW-1644633143247', 175, 5, 26, 84, 1931, 100, 0);
INSERT INTO `inventario` VALUES (167, 111, 'PSW-1644633143828', 177, 4, 26, 76, 1747, 100, 0);
INSERT INTO `inventario` VALUES (168, 102, 'PSW-1644633143509', 176, 4, 33, 100, 2299, 100, 0);
INSERT INTO `inventario` VALUES (169, 112, 'PSW-1644633143856', 178, 3, 29, 90, 2069, 100, 0);
INSERT INTO `inventario` VALUES (170, 90, 'PSW-1644633143059', 179, 6, 29, 90, 2069, 100, 0);
INSERT INTO `inventario` VALUES (171, 113, 'PSW-1644633143889', 180, 4, 29, 92, 2115, 100, 0);
INSERT INTO `inventario` VALUES (172, 110, 'PSW-1644633143805', 181, 4, 39, 112, 2575, 100, 0);
INSERT INTO `inventario` VALUES (173, 112, 'PSW-1644633143856', 183, 3, 29, 90, 2069, 100, 0);
INSERT INTO `inventario` VALUES (174, 111, 'PSW-1644633143828', 182, 4, 26, 76, 1747, 100, 0);
INSERT INTO `inventario` VALUES (175, 113, 'PSW-1644633143889', 184, 4, 29, 92, 2115, 100, 0);
INSERT INTO `inventario` VALUES (176, 112, 'PSW-1644633143856', 185, 4, 29, 90, 2069, 100, 0);
INSERT INTO `inventario` VALUES (177, 113, 'PSW-1644633143889', 186, 5, 29, 92, 2115, 100, 0);
INSERT INTO `inventario` VALUES (178, 112, 'PSW-1644633143856', 187, 4, 29, 90, 2069, 100, 0);
INSERT INTO `inventario` VALUES (179, 112, 'PSW-1644633143856', 188, 5, 29, 90, 2069, 100, 0);
INSERT INTO `inventario` VALUES (180, 112, 'PSW-1644633143856', 189, 5, 29, 90, 2069, 100, 0);
INSERT INTO `inventario` VALUES (181, 112, 'PSW-1644633143856', 190, 6, 29, 90, 2069, 100, 0);

-- ----------------------------
-- Table structure for modelo
-- ----------------------------
DROP TABLE IF EXISTS `modelo`;
CREATE TABLE `modelo`  (
  `idModelo` int(50) NOT NULL AUTO_INCREMENT,
  `modelo` varchar(100) CHARACTER SET ascii COLLATE ascii_bin NULL DEFAULT NULL,
  `descripcion` varchar(255) CHARACTER SET ascii COLLATE ascii_bin NULL DEFAULT NULL,
  PRIMARY KEY (`idModelo`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 119 CHARACTER SET = ascii COLLATE = ascii_bin ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of modelo
-- ----------------------------
INSERT INTO `modelo` VALUES (14, 'MOON701/C/M', '*7 Heel, 2 3/4\" Cut-Out PF Slide');
INSERT INTO `modelo` VALUES (15, 'ADO789/R-B/B-R', '*7 Heel, 2 3/4\" PF Two Tone Ankle Strap d\'Orsay Sandal');
INSERT INTO `modelo` VALUES (16, 'ADO709UVLN/B/NMC', '*7 Heel, 2 3/4\" UV Reactive Lined PF Ankle Strap Sandal');
INSERT INTO `modelo` VALUES (17, 'MOON708HB/C/SHG', '*7 Heel, 2 3/4\" Cut-Out PF Ankle Strap Sandal');
INSERT INTO `modelo` VALUES (18, 'SKY308T/C/SMK', '7 Heel, 2 3/4\" Tinted PF Ankle Strap Sandal');
INSERT INTO `modelo` VALUES (19, 'MOON708/C/M', '7 Heel, 2 3/4\" Cut-Out PF Ankle Strap Sandal');
INSERT INTO `modelo` VALUES (20, 'ADO730/B/M', '7 Heel, 2 3/4\" PF Criss Cross Slingback Sandal');
INSERT INTO `modelo` VALUES (21, 'DEL625/BFS/M', '6 Heel, 1 3/4\" PF d\'Orsay Sandal w/ RS, Back Zip');
INSERT INTO `modelo` VALUES (22, 'SKY308LN/C/B', '*7 Heel, 2 3/4\" Lined PF Ankle Strap Sandal');
INSERT INTO `modelo` VALUES (23, 'SKY301T/C/SMK', '*7 Heel, 2 3/4\" Tinted PF Slide');
INSERT INTO `modelo` VALUES (24, 'SKY309LNRS/B/M', '*7 Heel, 2 3/4\" Lined PF Ankle Strap Sandal w/ RS');
INSERT INTO `modelo` VALUES (25, 'SKY308G-T/C/BRGI', '7 Heel, 2 3/4\" PF Ankle Strap Sandal w/ Tinted Heel');
INSERT INTO `modelo` VALUES (26, 'SKY308/C-B/M', '7 Heel, 2 3/4\" PF Ankle Strap Sandal');
INSERT INTO `modelo` VALUES (27, 'SKY309TT/B/BNHP', '7 Heel, 2 3/4\" PF Two Tone Ankle Strap Sandal');
INSERT INTO `modelo` VALUES (28, 'ADO709WR/B/RBOWG', '*7 Heel, 2 3/4\" Wrapped PF Ankle Strap Sandal');
INSERT INTO `modelo` VALUES (29, 'KNUCKS709/B/M', '**7 Heel, 2 3/4\" PF Ankle Strap Sandal');
INSERT INTO `modelo` VALUES (30, 'ADO709SRS/B/NMC', '*7 Heel, 2 3/4\" PF Sandal W/Simulated RS Filled Bottom');
INSERT INTO `modelo` VALUES (31, 'SKY301-5/C/B-NW', '*7 Heel, 2 3/4\" PF Slide, Neon UV Reactive');
INSERT INTO `modelo` VALUES (32, 'SKY309MG/B/M', '7 Heel, 2 3/4\" PF Ankle Strap Sandal w/Mini Glitter');
INSERT INTO `modelo` VALUES (33, 'SKY309/B/M', '7 Heel, 2 3/4\" PF Sandal');
INSERT INTO `modelo` VALUES (34, 'STDUS708/C/B', '7 Heel, 2 3/4\" R/S Studded PF Ankle Strap Sandal');
INSERT INTO `modelo` VALUES (35, 'SKY309LNRS/B/M', '*7 Heel, 2 3/4\" Lined PF Ankle Strap Sandal w/ RS');
INSERT INTO `modelo` VALUES (36, 'ADO708OMBRE/C/EM-B', '*7 Heel, 2 3/4\" Ombre Glittered PF Ankle Strap Sandal');
INSERT INTO `modelo` VALUES (37, 'ADO708CHLN/C/ROGLDCH', '*7 Heel, 2 3/4\" Lined PF Ankle Strap Sandal');
INSERT INTO `modelo` VALUES (38, 'ADO708MCT/C/LBL', '*7 Heel, 2 3/4\" Tinted PF Ankle Strap Sandal');
INSERT INTO `modelo` VALUES (39, 'ADO708MMG/C/M', '7 Heel, 2 3/4\" PF Ankle Strap Sandal w/Mini Glitter');
INSERT INTO `modelo` VALUES (40, 'CYTL308PS/C/NHP', '*7 Heel, 2 3/4\" PF Ankle Strap Sandal');
INSERT INTO `modelo` VALUES (41, 'SKY302SRS/C/B', '*7 Heel, 2 3/4\"PF Two Band Slide W/Simulated RS Filled BTM');
INSERT INTO `modelo` VALUES (42, 'ADO701/B/M', '7 Heel, 2 3/4\" PF Peep Toe Slide');
INSERT INTO `modelo` VALUES (43, 'ADO701SRS/C/B', '7 Heel, 2 3/4\" PF Slide W/Simulated RS Filled BTM');
INSERT INTO `modelo` VALUES (44, 'ADO708BR-H/C/B-R', '7 Heel, 2 3/4\" PF Two Tone Ankle Strap Sandal');
INSERT INTO `modelo` VALUES (45, 'SKY301-5/C/B-NHP', '*7 Heel, 2 3/4\" PF Slide, Neon UV Reactive');
INSERT INTO `modelo` VALUES (46, 'STDUS702T/C/HP-C', '*7 Heel, 2 3/4\" RS Studded PF Two Band Slide');
INSERT INTO `modelo` VALUES (47, 'SKY301T/C/SMK', '*7 Heel, 2 3/4\" Tinted PF Slide');
INSERT INTO `modelo` VALUES (48, 'FLAM809UVLN/B/N-UVLN', '*8 Heel, 4\" Lined PF Ankle Strap Sandal W/Neon UV Reactive');
INSERT INTO `modelo` VALUES (49, 'SKY308WHG/C/B-RG', '7 Heel, 2 3/4\" PF Ankle Strap Sandal w/ Liquid Infused PF');
INSERT INTO `modelo` VALUES (50, 'LOVEHN708CRS/C/B', '*7 Rose Thorn Heel, 3 1/4\" PF Ankle Strap Sandal');
INSERT INTO `modelo` VALUES (51, 'STPLASH701/C/B', '*7 Heel, 2 3/4\" PF Slide w/Holo Stars');
INSERT INTO `modelo` VALUES (52, 'SKY308CF/C/C-BPIRIG', '*7 Heel, 2 3/4\" PF Ankle Strap Sandal w/ Crystal Flower');
INSERT INTO `modelo` VALUES (53, 'SKY308OF/C/S', '*7 Heel, 2 3/4\" PF Ankle Strap Sandal w/ Opal Flakes');
INSERT INTO `modelo` VALUES (54, 'MOON708GFT/C/PN', '*7 Heel,2 3/4\" Tinted Cut-Out PF Ankle Strap Sandal w/Gltrs');
INSERT INTO `modelo` VALUES (55, 'ADO709BR-H/B/B-R', '7 Heel, 2 3/4\" PF Two Tone Ankle Strap Sandal');
INSERT INTO `modelo` VALUES (56, 'MOON708/C/B', '7 Heel, 2 3/4\" Cut-Out PF Ankle Strap Sandal');
INSERT INTO `modelo` VALUES (57, 'STDUS708T/C/B-C', '7 Heel, 2 3/4\" PF Ankle Strap Sandal w/RS Studded Bottom');
INSERT INTO `modelo` VALUES (58, 'ADO701LN/C/B', '7 Heel, 2 3/4\" PF w/ Clear Bottom Slide');
INSERT INTO `modelo` VALUES (59, 'RBOW309UV/B/NMC', '7 Heel, 2 3/4\" PF Ankle Strap Sandal');
INSERT INTO `modelo` VALUES (60, 'SKY308CP-1/C/B-SCH', '*7 Heel, 2 3/4\" PF Ankle Strap Sandal w/ Chrome Print');
INSERT INTO `modelo` VALUES (61, 'ADO709/B/M', '7 Heel, 2 3/4\" PF Ankle Strap PF Sandal');
INSERT INTO `modelo` VALUES (62, 'ADO708T-2/SK-BPT/B-C', '7 Heel, 2 3/4\" PF Ombre Ankle Strap Sandal');
INSERT INTO `modelo` VALUES (63, 'SKY308LN/C/B', '*7 Heel, 2 3/4\" Lined PF Ankle Strap Sandal');
INSERT INTO `modelo` VALUES (64, 'STDUS708T/C/PP-C', '*7 Heel, 2 3/4\" PF Ankle Strap Sandal w/RS Studded Bottom');
INSERT INTO `modelo` VALUES (65, 'ESTM709BR/B/R-B', '*7 Heel, 3\" PF Two Tone Ankle Strap Sandal');
INSERT INTO `modelo` VALUES (66, 'MOON701TG/C/B-S', '*7 Heel, 2 3/4\" Cut-Out PF Slide');
INSERT INTO `modelo` VALUES (67, 'SKY308T/C/SMK', '7 Heel, 2 3/4\" Tinted PF Ankle Strap Sandal');
INSERT INTO `modelo` VALUES (68, 'ADO708STORM/C/PNHG', '*7 Heel,2 3/4\"PF Ankle Strap Sandal w/Lightning Bolt Print');
INSERT INTO `modelo` VALUES (69, 'SKY301/C-B/C', '7 Heel, 2 3/4\" PF Slide');
INSERT INTO `modelo` VALUES (70, 'ADO708T/C/R', '7 Heel, 2 3/4\" Tinted PF Ankle Strap Sandal');
INSERT INTO `modelo` VALUES (71, 'RAPT808/C/M', '8 Finger Bone Heel, 4\" Skull PF Ankle Strap Sandal');
INSERT INTO `modelo` VALUES (72, 'ADO701-3/C/B-PW', '7 Heel, 2 3/4\" PF Slide w/ Rhinestone Platform');
INSERT INTO `modelo` VALUES (73, 'ADO709LS/B/M', '7 Heel, 2 3/4\" PF Ankle Strap RS Sandal');
INSERT INTO `modelo` VALUES (74, 'ADO701/C/B', '7 Heel, 2 3/4\" PF Peep Toe Slide');
INSERT INTO `modelo` VALUES (75, 'SKY308CP-3/C/B-SCH', '*7 Heel, 2 3/4\" PF Ankle Strap Sandal w/ Chrome Print');
INSERT INTO `modelo` VALUES (76, 'SKY334/BFS/M', '7 Heel, 2 3/4\" PF Criss Cross Ankle Wrap Sandal');
INSERT INTO `modelo` VALUES (77, 'ADO709SP/RSPPT/B', '*7 Heel, 2 3/4\" PF Ankle Strap Sandal w/Snake Skin Print');
INSERT INTO `modelo` VALUES (78, 'ADO709T/B/R', '*7 Heel, 2 3/4\" PF Ankle Strap Sandal');
INSERT INTO `modelo` VALUES (79, 'DEL601/B/M', '6 Heel, 1 3/4\" Platform Peep Toe Slide');
INSERT INTO `modelo` VALUES (80, 'ASP609/B/C', '6 Heel, 2 1/4\" PF Vegan Friendly Ankle Strap Sandal');
INSERT INTO `modelo` VALUES (81, 'SKY310SQ/B/PWCH', '*7 Heel, 2 3/4\" Chrome PF Ankle Strap Sandal');
INSERT INTO `modelo` VALUES (82, 'DEL609/B/M', '6 Heel, 1 3/4\" PF Ankle Strap Sandal');
INSERT INTO `modelo` VALUES (83, 'STDUS708/C/M', '7 Rhinestone Studded Ankle Strap P/F Sandal');
INSERT INTO `modelo` VALUES (84, 'ADO701/C/B', '7 Heel, 2 3/4\" PF Peep Toe Slide');
INSERT INTO `modelo` VALUES (85, 'MOON709CAT/B/B-S', '*7 Heel, 2 3/4\" Cut-Out PF Ankle Strap Sandal w/ Cat');
INSERT INTO `modelo` VALUES (86, 'SKY301T/C/SMK', '*7 Heel, 2 3/4\" Tinted PF Slide');
INSERT INTO `modelo` VALUES (87, 'ADO3000HWR/WHG/M', '7 Heel, 2 3/4\" PF Stretch Thigh Boot, Side Zip');
INSERT INTO `modelo` VALUES (88, 'ADO701FL/C/R', '7 Heel, 2 3/4\" PF Flower-filled Slide');
INSERT INTO `modelo` VALUES (89, 'ADO701SRS/C/B', '7 Heel, 2 3/4\" PF Slide W/Simulated RS Filled BTM');
INSERT INTO `modelo` VALUES (90, 'ADO701FL/C/HP', '7 Heel, 2 3/4\" PF Flower-filled Slide');
INSERT INTO `modelo` VALUES (91, 'ADO708CG/C/SG', '7 Heel, 2 3/4\" PF Ankle Strap Sandal w/ Glitter Inserts');
INSERT INTO `modelo` VALUES (92, 'ADO708CG/C/BG', '7 Heel, 2 3/4\" PF Ankle Strap Sandal w/ Glitter Inserts');
INSERT INTO `modelo` VALUES (93, 'ADO709/B/M', '7 Heel, 2 3/4\" PF Ankle Strap PF Sandal');
INSERT INTO `modelo` VALUES (94, 'ADO708SRS/C/NMC', '*7 Heel, 2 3/4\" PF Sandal W/Simulated RS Filled Bottom');
INSERT INTO `modelo` VALUES (95, 'CAP609/B/C', '6 Ankle Strap PF Sandal W/RS On Heel');
INSERT INTO `modelo` VALUES (96, 'ADO709RC/B/RBOWCH', '7 Heel, 2 3/4\" Chrome Plated PF Ankle Strap Sandal');
INSERT INTO `modelo` VALUES (97, 'CLAS20/BLSA', '*4 Pointed-Toe Pump');
INSERT INTO `modelo` VALUES (98, 'ADO709UVLN/B/NMC', '*7 Heel, 2 3/4\" UV Reactive Lined PF Ankle Strap Sandal');
INSERT INTO `modelo` VALUES (99, 'CYTL308PS/C/NTGR', '*7 Heel, 2 3/4\" PF Ankle Strap Sandal');
INSERT INTO `modelo` VALUES (100, 'DEL600-17/BELS/M', '*6 Heel, 1 3/4\" PF Strappy Sandal, Back Zip');
INSERT INTO `modelo` VALUES (101, 'DEL634/BFS/M', '*6 Heel, 1 3/4\" PF Criss Cross Ankle Wrap Sandal');
INSERT INTO `modelo` VALUES (102, 'MOON701HRS/C/B-R', '7 Heel, 2 3/4\" Cut-Out PF Slide');
INSERT INTO `modelo` VALUES (103, 'FLAM801T/C/SMK', '*8 Heel, 4\" Tinted PF Slide');
INSERT INTO `modelo` VALUES (104, 'MOON708DIA/C/M', '7 Heel, 2 3/4\" Cut-Out PF Ankle Strap Sandal w/ Diamond');
INSERT INTO `modelo` VALUES (105, 'MOON708HRS/C/C-R', '7 Heel, 2 3/4\" Cut-Out PF Ankle Strap Sandal');
INSERT INTO `modelo` VALUES (106, 'MOON708SK/C/B-PW', '*7 Heel, 2 3/4\" Cut-Out PF Ankle Strap Sandal');
INSERT INTO `modelo` VALUES (107, 'SCLP708-2RS/C/B-PWRS', '*7 Scalloped Heel, 3 1/4\" PF Ankle Strap Sandal w/ RS');
INSERT INTO `modelo` VALUES (108, 'SKY308T/C/SMK', '7 Heel, 2 3/4\" Tinted PF Ankle Strap Sandal');
INSERT INTO `modelo` VALUES (109, 'SKY308UVMG/PNT/M', '*7 Heel, 2 3/4\" PF Ankle Strap Sandal');
INSERT INTO `modelo` VALUES (110, 'SKY308WHG/C/C-BPG', '7 Heel, 2 3/4\" PF Ankle Strap Sandal w/ Liquid Infused PF');
INSERT INTO `modelo` VALUES (111, 'SKY309GPT/B/SMK', '*7 Heel, 2 3/4\" Tinted Platform Ankle Strap Sandal');
INSERT INTO `modelo` VALUES (112, 'SKY309MG/B/M', '7 Heel, 2 3/4\" PF Ankle Strap Sandal w/Mini Glitter');
INSERT INTO `modelo` VALUES (113, 'SKY334/BFS/M', '7 Heel, 2 3/4\" PF Criss Cross Ankle Wrap Sandal');
INSERT INTO `modelo` VALUES (114, 'STPLASH701/C/B', '*7 Heel, 2 3/4\" PF Slide w/Holo Stars');
INSERT INTO `modelo` VALUES (115, 'TAB708MG/C/M', '*7 1/2 Heel, 3 1/2\" PF Ankle Strap Sandal w/Glitter');
INSERT INTO `modelo` VALUES (116, 'UNI708T/C/BGUMPN', '7 Heel, 3 1/4\" PF Ankle Strap Sandal w/ Unicorn Heel');
INSERT INTO `modelo` VALUES (117, 'TIP708-5/C/BG', '7 Heel, 2 3/4\" PF Ankle Strap Sandal');
INSERT INTO `modelo` VALUES (118, 'UNI708T/C/BU', '*7 Heel, 3 1/4\" PF Ankle Strap Sandal w/ Unicorn Heel');

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
