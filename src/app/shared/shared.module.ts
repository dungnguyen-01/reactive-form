// Import PrimeNG modules
import { ScrollerModule } from 'primeng/scroller';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { ScrollTopModule } from 'primeng/scrolltop';
import { SidebarModule } from 'primeng/sidebar';
import { SkeletonModule } from 'primeng/skeleton';
import { FieldsetModule } from 'primeng/fieldset';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { NgModule } from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { DropdownModule } from 'primeng/dropdown';
import { TooltipModule } from 'primeng/tooltip';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  imports: [
    SidebarModule,
    ScrollerModule,
    ScrollPanelModule,
    ScrollTopModule,
    SkeletonModule,
    FieldsetModule,
    CarouselModule,
    ButtonModule,
    DialogModule,
    DynamicDialogModule,
    DropdownModule,
    TooltipModule,
    InputTextModule,
    ReactiveFormsModule, 
    FormsModule
  ],
  exports: [

    SidebarModule,
    ScrollerModule,
    ScrollPanelModule,
    ScrollTopModule,
    SkeletonModule,
    FieldsetModule,
    CarouselModule,
    ButtonModule,
    DialogModule,
    DynamicDialogModule,
    DropdownModule,
    TooltipModule,
    InputTextModule,
    ReactiveFormsModule, FormsModule
  ]
})
export class SharedModule {}
