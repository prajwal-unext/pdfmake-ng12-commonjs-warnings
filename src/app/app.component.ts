import { Component } from '@angular/core';
import 'pdfmake/build/pdfmake'
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
import { TDocumentDefinitions } from 'pdfmake/interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pdfmake-ng-warnings';
  pdfmake: any;
  constructor(){
    this.pdfmake = window['pdfMake']
  }

  exportAsPdf() {
    const sampleSheet = {
      key1: 'value1',
      key2: 'value2',
      key3: 'value3',
    }
    this.pdfmake.fonts = {
      Roboto: {
        normal: 'Roboto-Regular.ttf',
        bold: 'Roboto-Medium.ttf',
        italics: 'Roboto-Italic.ttf',
        bolditalics: 'Roboto-MediumItalic.ttf'
      },
    };
    
    const docDefinition: TDocumentDefinitions = {
      content: [{
        noWrap: false,
        table: {
          headerRows: 1,
          body: [
            [sampleSheet, sampleSheet]
          ]
        }
      }],
      defaultStyle: {
        font: "Roboto",
      }
    };
    this.pdfmake.createPdf(docDefinition, {}, this.pdfmake.fonts, pdfFonts.pdfMake.vfs).download(`sample.pdf`);
  }
}
