import { Injectable } from '@angular/core';
import * as ExcelJS from 'exceljs';
import { saveAs } from 'file-saver';

export interface ExcelColumn {
  header: string;
  key: string;
  width?: number;
  isCurrency?: boolean;
}

export interface ExcelExportOptions {
  title: string;
  fileName: string;
  columns: ExcelColumn[];
  data: any[];
  subtitle?: string;
  subtitle2?: string;
}

@Injectable({
  providedIn: 'root'
})
export class ExcelExportService {
  
  constructor() { }

  async exportToExcel(options: ExcelExportOptions): Promise<void> {
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('Datos');

    // Mapear anchos si están definidos, si no usar 20 por defecto
    worksheet.columns = options.columns.map(col => ({
      header: col.header,
      key: col.key,
      width: col.width || 20
    }));

    // Insertar título
    worksheet.insertRow(1, [options.title]);
    const titleCell = worksheet.getCell('A1');
    titleCell.font = { name: 'Arial', size: 16, bold: true, color: { argb: 'FFFFFFFF' } };
    titleCell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF1E293B' } }; // Slate 800
    titleCell.alignment = { vertical: 'middle', horizontal: 'center' };
    worksheet.mergeCells(`A1:${String.fromCharCode(65 + options.columns.length - 1)}1`);
    worksheet.getRow(1).height = 30;

    let currentRow = 2;

    if (options.subtitle) {
      worksheet.insertRow(currentRow, [options.subtitle]);
      const subCell = worksheet.getCell(`A${currentRow}`);
      subCell.font = { name: 'Arial', size: 12, bold: true, color: { argb: 'FF64748B' } };
      worksheet.mergeCells(`A${currentRow}:${String.fromCharCode(65 + options.columns.length - 1)}${currentRow}`);
      currentRow++;
    }

    if (options.subtitle2) {
      worksheet.insertRow(currentRow, [options.subtitle2]);
      const subCell2 = worksheet.getCell(`A${currentRow}`);
      subCell2.font = { name: 'Arial', size: 11, italic: true, color: { argb: 'FF94A3B8' } };
      worksheet.mergeCells(`A${currentRow}:${String.fromCharCode(65 + options.columns.length - 1)}${currentRow}`);
      currentRow++;
    }

    // Fila vacía antes de la tabla
    worksheet.insertRow(currentRow, []);
    currentRow++;

    // Estilizar las cabeceras (la fila actual de cabeceras es currentRow)
    const headerRow = worksheet.getRow(currentRow);
    headerRow.values = options.columns.map(col => col.header);
    headerRow.height = 20;

    headerRow.eachCell((cell) => {
      cell.fill = {
        type: 'pattern',
        pattern: 'solid',
        fgColor: { argb: 'FF0EA5E9' } // Sky Blue 500
      };
      cell.font = { name: 'Arial', bold: true, color: { argb: 'FFFFFFFF' } };
      cell.border = {
        top: { style: 'thin', color: { argb: 'FFCBD5E1' } },
        left: { style: 'thin', color: { argb: 'FFCBD5E1' } },
        bottom: { style: 'thin', color: { argb: 'FFCBD5E1' } },
        right: { style: 'thin', color: { argb: 'FFCBD5E1' } }
      };
      cell.alignment = { vertical: 'middle', horizontal: 'center' };
    });

    currentRow++;

    // Agregar datos
    options.data.forEach((rowData, index) => {
      const row = worksheet.insertRow(currentRow, rowData);
      
      row.eachCell((cell, colNumber) => {
        // Alternar colores de fila
        const isEven = index % 2 === 0;
        cell.fill = {
          type: 'pattern',
          pattern: 'solid',
          fgColor: { argb: isEven ? 'FFFFFFFF' : 'FFF8FAFC' } // Blanco y Slate 50
        };

        cell.border = {
          top: { style: 'thin', color: { argb: 'FFE2E8F0' } },
          left: { style: 'thin', color: { argb: 'FFE2E8F0' } },
          bottom: { style: 'thin', color: { argb: 'FFE2E8F0' } },
          right: { style: 'thin', color: { argb: 'FFE2E8F0' } }
        };

        // Formato moneda si corresponde
        const columnDef = options.columns[colNumber - 1];
        if (columnDef && columnDef.isCurrency && typeof cell.value === 'number') {
          cell.numFmt = '"$"#,##0.00';
          cell.alignment = { horizontal: 'right' };
        } else if (typeof cell.value === 'number') {
          cell.alignment = { horizontal: 'right' };
        }
      });
      currentRow++;
    });

    // Guardar archivo
    const buffer = await workbook.xlsx.writeBuffer();
    const blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    saveAs(blob, `${options.fileName}.xlsx`);
  }

  async exportRawDataToExcel(options: { fileName: string; data: any[][]; sheetName?: string }): Promise<void> {
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet(options.sheetName || 'Datos');

    options.data.forEach((rowData, index) => {
      const row = worksheet.addRow(rowData);
      
      // Basic styling for the ATS file or generic arrays
      // We bold headers (if they look like headers)
      if (rowData.length === 1 && typeof rowData[0] === 'string') {
        // Section titles
        row.font = { bold: true, size: 14, color: { argb: 'FF1E293B' } };
        row.getCell(1).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFE2E8F0' } };
      } else if (rowData.length > 1 && typeof rowData[0] === 'string' && rowData[0] === 'TipoIdInformante') {
        // Sub headers for ATS
        row.font = { bold: true, color: { argb: 'FFFFFFFF' } };
        row.eachCell(cell => {
          cell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF0EA5E9' } };
          cell.border = {
            top: { style: 'thin', color: { argb: 'FFCBD5E1' } },
            left: { style: 'thin', color: { argb: 'FFCBD5E1' } },
            bottom: { style: 'thin', color: { argb: 'FFCBD5E1' } },
            right: { style: 'thin', color: { argb: 'FFCBD5E1' } }
          };
        });
      } else {
        // Regular cells
        row.eachCell(cell => {
          if (typeof cell.value === 'number') {
            cell.alignment = { horizontal: 'right' };
          }
        });
      }
    });

    // Auto-fit columns
    worksheet.columns.forEach((column) => {
      let maxLength = 0;
      column.eachCell!({ includeEmpty: true }, (cell) => {
        const columnLength = cell.value ? cell.value.toString().length : 10;
        if (columnLength > maxLength) {
          maxLength = columnLength;
        }
      });
      column.width = maxLength < 10 ? 10 : maxLength + 2;
    });

    const buffer = await workbook.xlsx.writeBuffer();
    const blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    saveAs(blob, `${options.fileName}.xlsx`);
  }
}
