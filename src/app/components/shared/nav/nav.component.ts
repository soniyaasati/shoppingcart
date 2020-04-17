import { Component, OnInit } from "@angular/core";

declare var $: any;

@Component({
  selector: "app-nav",
  templateUrl: "./nav.component.html",
  styleUrls: ["./nav.component.css"],
})
export class NavComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    $(document).ready(function () {
      $(".cart-detail").css("display", "none");
      $(".product-body").css("display", "block");
      $(".filters").css("display", "block");

      $(".cart").on("click", function () {
        $(".filters").toggle();
        $(".product-body").toggle();
        $(".cart-detail").toggle();
      });
    });
  }
}
