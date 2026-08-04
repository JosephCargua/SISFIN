export interface AutorizacionSri {
  id?: string;
  autorizacion: string;
  tipoComprobante: string;
  serieInicio?: string;
  serieFin?: string;
  fechaInicio?: Date | string;
  fechaFin?: Date | string;
}

export interface Persona {
  id?: string;
  estado: string;
  tipo: string;
  contribuyenteEspecial: boolean;
  ruc?: string;
  cedula?: string;
  nombre: string;
  nombreComercial?: string;
  telefonos?: string;
  direccion?: string;
  extranjero: boolean;
  personaAsociadaId?: string;
  categoriaId?: string;
  emails?: string;

  // Roles
  esCliente: boolean;
  esProveedor: boolean;
  esEmpleado: boolean;
  esAccionista: boolean;
  esVendedor: boolean;

  // Cliente
  cliCuentaPorCobrarId?: string;
  cliVendedorId?: string;
  cliDescuento?: number;
  cliParaExportacion: boolean;
  cliCentroCostoId?: string;
  cliSaldoInicial?: number;
  cliPvpPorDefecto?: string;
  cliCupoCredito: boolean;

  // Proveedor
  provCuentaPorPagarId?: string;
  provCuentaRecurrenteId?: string;
  provCentroCostoId?: string;
  provCtaRelacionada: boolean;
  provArtesano: boolean;
  provSaldoInicial?: number;
  provRetIrId?: string;
  provRetIvaId?: string;

  // Empleado
  empContrato?: string;
  empSueldo?: number;

  // Accionista
  accCuentaPorPagarId?: string;

  // Bancarios
  bancoId?: string;
  tipoCuentaBancaria?: string;
  nCuentaBancaria?: string;
  refBcoInternacional?: string;

  autorizacionesSri?: AutorizacionSri[];
}
