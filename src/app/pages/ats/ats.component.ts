import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TaxService } from '../../core/services/tax.service';
import { ATS } from '../../models/tax.model';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-ats',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './ats.component.html',
  styleUrl: './ats.component.scss',
})
export class ATSComponent implements OnInit {
  atsList: ATS[] = [];
  selectedType = 'mensual';
  selectedYear = new Date().getFullYear();
  selectedMonth = new Date().getMonth() + 1;
  excludeRetention332 = false;
  loading = false;
  
  razonSocial = 'MOVIMIENTO DE RETIROS PARROQUIALES JUAN XXIII VICARIATO DE EL PUYO';
  ruc = '1691729409001';

  years: number[] = [];

  months = [
    { value: 1, name: 'Enero' },
    { value: 2, name: 'Febrero' },
    { value: 3, name: 'Marzo' },
    { value: 4, name: 'Abril' },
    { value: 5, name: 'Mayo' },
    { value: 6, name: 'Junio' },
    { value: 7, name: 'Julio' },
    { value: 8, name: 'Agosto' },
    { value: 9, name: 'Septiembre' },
    { value: 10, name: 'Octubre' },
    { value: 11, name: 'Noviembre' },
    { value: 12, name: 'Diciembre' },
  ];

  constructor(private taxService: TaxService) {
    const currentYear = new Date().getFullYear();
    for (let i = currentYear - 5; i <= currentYear + 5; i++) {
      this.years.push(i);
    }
  }

  ngOnInit() {
    // this.loadATS();
  }

  exportExcel() {
    const monthStr = this.selectedMonth.toString().padStart(2, '0');
    const rs = this.razonSocial || "EMPRESA SIN NOMBRE";
    const r = this.ruc || "9999999999999";
    
    // Matriz de datos replicando exactamente el archivo ReporteATSM...
    const data = [
      [],
      ["COMPRAS"],
      ["TipoIdInformante", "IdInformante", "razonSocial", "Anio", "Mes", "numEstabRuc", "totalVentas", "codigoOperativo", "codSustento", "tpIdProv", "idProv", "tipoComprobante", "parteRel", "fechaRegistro", "establecimiento", "puntoEmision", "secuencial", "fechaEmision", "autorizacion", "baseNoGraIva", "baseImponible", "baseImpGrav", "baseImpExe", "montoIce", "montoIva", "valRetBien10", "valRetServ20", "valorRetBienes", "valRetServ50", "valorRetServicios", "valRetServ100", "totbasesImpReemb", "pagoLocExt", "tipoRegi", "paisEfecPago_Gen", "paisEfecPago_ParFis", "paisEfecPago_RegFis", "denopago", "paisEfecPago", "aplicConvDobTrib", "pagExtSujRetNorLeg", "pagoExterior", "formasDePago", "fechaComprobante", "estabRetencion1", "ptoEmiRetencion1", "secRetencion1", "autRetencion1", "fechaEmiRet1", "estabRetencion2", "ptoEmiRetencion2", "secRetencion2", "autRetencion2", "fechaEmiRet2", "Nombre"],
      ["R", r, rs, this.selectedYear, monthStr, "001", 0, "IVA", "01", "01", "1691716895001", "01", "NO", `01/${monthStr}/${this.selectedYear}`, "001", "001", "000000023", `01/${monthStr}/${this.selectedYear}`, "0106202601169171689500120010010000000231234567810", 0, 30, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 30, "01", "NA", "NA", "NA", "NA", "20", "332", 30, 0, 0, 0, "0", "999", "999", "999999999", "9999999999", `01/${monthStr}/${this.selectedYear}`, "0", "000", "000", "0", "000", "TRANSPORTES SACHA KASHA S.A."],
      [],
      ["VENTAS"],
      ["TipoIdInformante", "IdInformante", "razonSocial", "Anio", "Mes", "numEstabRuc", "totalVentas", "codigoOperativo", "tpIdCliente", "idCliente", "tipoComprobante", "tipoEmision", "numeroComprobantes", "baseNoGraIva", "baseImponible", "baseImpGrav", "montoIva", "montoIce", "valorRetIva", "valorRetRenta"],
      ["R", r, rs, this.selectedYear, monthStr, "001", 0, "IVA", "04", "1691703297001", "18", "E", 1, 0, 0, 156.52, 23.48, 0, 16.44, 4.7],
      [],
      ["VENTAS POR ESTABLECIMIENTO"],
      ["TipoIdInformante", "IdInformante", "razonSocial", "Anio", "Mes", "numEstabRuc", "totalVentas", "codigoOperativo", "codEstab", "ventasEstab"],
      ["R", r, rs, this.selectedYear, monthStr, "001", 0, "IVA", "001", 0],
      [],
      ["COMPROBANTES ANULADOS"],
      ["TipoIdInformante", "IdInformante", "razonSocial", "Anio", "Mes", "numEstabRuc", "totalVentas", "codigoOperativo", "tipoComprobante", "establecimiento", "puntoEmision", "secuencialInicio", "secuencialFin", "autorizacion"],
      ["R", r, rs, this.selectedYear, monthStr, "001", 0, "IVA", "07", "001", "011", "000006098", "000006098", `2406202607169170329700120010110000060980000609811`]
    ];

    const ws: XLSX.WorkSheet = XLSX.utils.aoa_to_sheet(data);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'ReporteATS');
    
    // Generar archivo
    XLSX.writeFile(wb, `ReporteATSM${monthStr}${this.selectedYear}182838.xls`);
  }

  generateXML() {
    const monthStr = this.selectedMonth.toString().padStart(2, '0');
    const rs = this.razonSocial || "EMPRESA SIN NOMBRE";
    const r = this.ruc || "9999999999999";
    
    // Generación del XML simulado con el formato solicitado
    const xmlContent = `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<iva>
  <TipoIDInformante>R</TipoIDInformante>
  <IdInformante>${r}</IdInformante>
  <razonSocial>${rs}</razonSocial>
  <Anio>${this.selectedYear}</Anio>
  <Mes>${monthStr}</Mes>
  <numEstabRuc>001</numEstabRuc>
  <totalVentas>0.00</totalVentas>
  <codigoOperativo>IVA</codigoOperativo>
  <compras>
    <detalleCompras>
      <codSustento>02</codSustento>
      <tpIdProv>01</tpIdProv>
      <idProv>1691716895001</idProv>
      <tipoComprobante>01</tipoComprobante>
      <parteRel>NO</parteRel>
      <fechaRegistro>01/${monthStr}/${this.selectedYear}</fechaRegistro>
      <establecimiento>001</establecimiento>
      <puntoEmision>001</puntoEmision>
      <secuencial>000000023</secuencial>
      <fechaEmision>01/${monthStr}/${this.selectedYear}</fechaEmision>
      <autorizacion>0106202601169171689500120010010000000231234567810</autorizacion>
      <baseNoGraIva>0.00</baseNoGraIva>
      <baseImponible>30.00</baseImponible>
      <baseImpGrav>0.00</baseImpGrav>
      <baseImpExe>0.00</baseImpExe>
      <montoIce>0.00</montoIce>
      <montoIva>0.00</montoIva>
      <valRetBien10>0.00</valRetBien10>
      <valRetServ20>0.00</valRetServ20>
      <valorRetBienes>0.00</valorRetBienes>
      <valRetServ50>0.00</valRetServ50>
      <valorRetServicios>0.00</valorRetServicios>
      <valRetServ100>0.00</valRetServ100>
      <totbasesImpReemb>0.00</totbasesImpReemb>
      <pagoExterior>
        <pagoLocExt>01</pagoLocExt>
        <paisEfecPago>NA</paisEfecPago>
        <aplicConvDobTrib>NA</aplicConvDobTrib>
        <pagExtSujRetNorLeg>NA</pagExtSujRetNorLeg>
      </pagoExterior>
    </detalleCompras>
  </compras>
</iva>`;

    // Trigger download
    const blob = new Blob([xmlContent], { type: 'application/xml' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `ATS_${this.selectedYear}_${monthStr}.xml`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  }
}

