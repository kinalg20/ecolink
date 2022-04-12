import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiServiceService } from 'src/app/Services/api-service.service';
import { CookiesService } from 'src/app/Services/cookies.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
  ItemCount: any = 1;
  slug: any;
  CartObj: any = {};
  responsiveOptions = [
    {
      breakpoint: '1024px',
      numVisible: 3,
      numScroll: 3
    },
    {
      breakpoint: '768px',
      numVisible: 2,
      numScroll: 2
    },
    {
      breakpoint: '560px',
      numVisible: 1,
      numScroll: 1
    }
  ];
  productDetail: any = [];

  products = [
    {
      id: 1,
      name: "ECC (A) 13oz Aerosol – Case of 12 –",
      price: "$448"
    },
    {
      id: 2,
      name: "ECC (A) 13oz Aerosol – Case of 12 –",
      price: "$448"
    },
    {
      id: 3,
      name: "ECC (A) 13oz Aerosol – Case of 12 –",
      price: "$448"
    },
    {
      id: 4,
      name: "ECC (A) 13oz Aerosol – Case of 12 –",
      price: "$448"
    },
    {
      id: 5,
      name: "ECC (A) 13oz Aerosol – Case of 12 –",
      price: "$448"
    },
    {
      id: 6,
      name: "ECC (A) 13oz Aerosol – Case of 12 –",
      price: "$448"
    },
    {
      id: 7,
      name: "ECC (A) 13oz Aerosol – Case of 12 –",
      price: "$448"
    }
  ]
  constructor(public _ApiService: ApiServiceService, private route: ActivatedRoute, private Cookies: CookiesService) { }

  ngOnInit(): void {
    this.slug = this.route.snapshot.params;
    this.getProductDetail(this.slug.slug);
  }


  Count(string: any) {
    if (string == "increase" && this.ItemCount < 10) {
      this.ItemCount = this.ItemCount + 1;
    }
    if (string == "decrease" && this.ItemCount > 1) {
      this.ItemCount = this.ItemCount - 1;
    }
  }

  getProductDetail(slug: any) {
    this._ApiService.getProductDetail(slug).subscribe((res: any) => {
      if (res.code == 200) {
        this.productDetail.push(res);
      }
    })
  }

  AddProductToCart(Item: any) {
    // let previousAddedValue = this.Cookies.getCartData();
    // console.log(previousAddedValue);
    console.log(localStorage.getItem("category"));
    // let obj = [
    //   {
    //     "CartProductId": Item.id,
    //     "ProductQuantity": this.ItemCount,
    //   }
    // ]
    // this.Cookies.SaveCartData(obj);
  }
}
