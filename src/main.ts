import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import Swal from 'sweetalert2';

// Overriding global window.alert
const originalAlert = window.alert;
window.alert = (message?: any) => {
  const msgStr = String(message || '');
  if (msgStr.includes('\n')) {
    // Si tiene saltos de línea, lo mostramos como un modal bonito
    Swal.fire({
      icon: 'info',
      html: msgStr.replace(/\n/g, '<br/>'),
      confirmButtonText: 'Aceptar',
      confirmButtonColor: '#3085d6',
      background: '#f8f9fa',
      customClass: {
        popup: 'aesthetic-popup',
        title: 'aesthetic-title',
        htmlContainer: 'aesthetic-html'
      }
    });
  } else {
    // Si es una sola línea, lo mostramos como un toast
    const isError = msgStr.toLowerCase().includes('error') || msgStr.toLowerCase().includes('seleccione');
    Swal.fire({
      toast: true,
      position: 'top-end',
      icon: isError ? 'error' : 'success',
      title: msgStr,
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true
    });
  }
};

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
