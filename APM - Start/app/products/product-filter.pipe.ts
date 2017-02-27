import {PipeTransform, Pipe} from '@angular/core';
import { IProduct } from './products';

@Pipe({
    name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform{

    transform(value: IProduct[], filter: string) : IProduct[]{
        filter = filter ? filter.toLowerCase() : null;
        return filter ? value.filter((product: IProduct) => product.productName.toLowerCase().indexOf(filter) !== -1) : value;
    }
}