import { Injectable } from '@angular/core';
import Config from './config';
import swal from 'sweetalert2';

@Injectable()
export class ConfigService {

  getApiUrl() {
    return Config.ApiUrl;
  }

  getApiRoot() {
    return Config.ApiRoot;
  }

  getModuloId() {
    return Config.modulo_id;
  }
}
