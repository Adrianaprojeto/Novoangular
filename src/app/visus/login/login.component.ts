import { Component,OnInit } from '@angular/core';
import { User } from 'src/app/models/user'; 
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

   constructor(private loginService : LoginService, private router: Router) {}

   ngOnInit(): void {
   }
     
   userModel = new User();
   mensagem = ''

  receberDados(){ this.loginService.login(this.userModel).subscribe((response) => {
    console.log("Deu Certo")
    this.router.navigateByUrl("/")
  }, (respostaErro) => {
    //alert(respostaErro.error)
    //console.log(respostaErro.error)
    if (respostaErro.error == "Email and password are required") {  
      this.mensagem = "Email e senha são obrigatório"
      //alert("ERRO: Email e senha são obrigatórios")
    } else if (respostaErro.error == "Incorrect password") {
      this.mensagem = "senha incorreta"
      //alert("ERRO: Senha incorreta")
    } else if (respostaErro.error == "Email and password are required") {
      alert("ERRO: Não é Possivel encontrar o Usuario")
    }
    else {
      this.mensagem = respostaErro.error
    }
  })
    
  }
}