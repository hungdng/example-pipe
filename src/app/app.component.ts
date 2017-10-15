import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  public content: String = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`;

  public strString = `cây đa đầu làng bảo đại`;

  public strSlice = `Học Angular 4`;

  public amount: Number = 65.23456;
  public result: Number = 0.8515;
  public strResult: String[] = ['abc', 'xyz', '123', '456', '1asd'];
  public total: Number = 752938746.8;
  public today: Date = new Date();
  public product: any = {
    id: 1,
    name: 'samsung',
    price: 2000,
    status: true
  };

  public idFilter: string;
  public nameFilter: String;
  public statusFilter: String;

  public products: any[] = [
    {
      id: 1,
      name: 'Dell 1',
      status: true
    },
    {
      id: 2,
      name: 'iphone 7',
      status: true
    },
    {
      id: 3,
      name: 'SamSung',
      status: false
    },
    {
      id: 4,
      name: 'ASUS',
      status: true
    },
    {
      id: 10,
      name: 'Lenovo',
      status: false
    }
  ];
  // Pipe Sort Number
  public arrNumber: number[] = [1, 2, 5, 7, 9, 3];
  public sortValue = 1;

  public onHandleSort(value: number) {
    return this.sortValue = value;
  }

  // Pipe Sort String
  public arrString: string[] = ['Banana', 'Orange', 'Apple', 'Mango'];
  public sortValueStr = 1;

  public onHandleSortStr(value: number): void {
    this.sortValueStr = value;
  }

  // Pipe String Captitlize
  public name: string = '';

  // Sort in Table
  public sortBy: string = 'name'; // price
  public sortValueNumber: number = 1; // 1: tang -1 giam
  public onSort(col: string): void {
    this.sortBy = col;
    this.sortValueNumber = -this.sortValueNumber;
  }
  public productxs: any[] = [
    {
      id: 1,
      name: 'Iphone 7 Plus',
      price: 600
    },
    {
      id: 2,
      name: 'Iphone 6 Plus',
      price: 300
    },
    {
      id: 3,
      name: 'Iphone 8 Plus',
      price: 700
    },
    {
      id: 4,
      name: 'Iphone X',
      price: 900
    },
    {
      id: 5,
      name: 'SamSung S8',
      price: 400
    }
    ,
    {
      id: 6,
      name: 'SamSung Note 8',
      price: 500
    }
    ,
    {
      id: 7,
      name: 'Sony XZ1',
      price: 100
    }
  ];
}
