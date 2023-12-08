import { Component, OnInit, } from '@angular/core';
import * as QRCode from 'qrcode';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teacherprofile',
  templateUrl: './teacherprofile.page.html',
  styleUrls: ['./teacherprofile.page.scss'],
})
export class TeacherprofilePage implements OnInit {
  courses: { name: string, qrCode: string }[] = [];
  name = 'Dusty Tessini'
  age = '25'
  Photo = '/assets/teacher.jpg'




  constructor(private router: Router) { }

  ngOnInit() {
    this.addCourse('Matemáticas');
    this.addCourse('Lengua');
    this.addCourse('Inglés');
    this.addCourse('Física');
  }

  addCourse(name: string): void {
    QRCode.toDataURL(name)
      .then(url => {
        this.courses.push({ name: name, qrCode: url });
      })
      .catch(err => {
        console.error(err);
      });
}

navigateToHome(course: { name: string, qrCode: string }): void {
  // Aquí puedes hacer cualquier cosa que necesites con el curso antes de navegar a la página de inicio
  this.router.navigate(['/home']);
}
}