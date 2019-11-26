import { Injectable } from '@angular/core';
import { RepositoryService } from '../environment/repository.service';
import { ErrorHandlerService } from '../environment/error-handler.service';
import { SELECT_POST_T } from 'src/app/models/request/select-post-t';
import { ISupplier } from 'src/app/interfaces/supplier/isupplier';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {

  constructor( private repo: RepositoryService
    , private errorHandler: ErrorHandlerService) {


    }

    public GetCurrentMappingCode(data: SELECT_POST_T<ISupplier>) {
      return this.repo.post('api/BNPISupplier/GetCurrentMappingCode', data);
    }
}
