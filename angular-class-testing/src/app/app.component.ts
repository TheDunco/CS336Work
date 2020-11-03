import { Component, VERSION } from "@angular/core";

// Ties all the files together
// @ is a decorator; marks a class as an Angular Component
//    and provides the metadata to do so
@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular " + VERSION.major;
}
