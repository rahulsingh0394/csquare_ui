import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FilterPipe, FireFilterPipe } from './filter.pipe';
import { SortPipe } from './filter.pipe'


@NgModule({
    imports: [CommonModule, RouterModule],
    declarations: [FilterPipe, SortPipe,FireFilterPipe],
    exports: [FilterPipe, SortPipe,FireFilterPipe]
})
export class FilterPipeModule {}