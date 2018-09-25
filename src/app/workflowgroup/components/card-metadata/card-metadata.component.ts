import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-card-metadata',
    template: `
    <div class="card">
        <header class="card-header">
            <p class="card-header-title">
                {{ title }}
            </p>
            <a class="card-header-icon">
                <span class="icon">
                    <i class="fa fa-angle-down"></i>
                </span>
            </a>
        </header>
        <ng-content></ng-content>
    </div>`,
    styleUrls: ['./card-metadata.component.sass']
})
export class CardMetadataComponent implements OnInit {

    @Input()
    title: string;

    constructor() { }

    ngOnInit() {
    }

}
