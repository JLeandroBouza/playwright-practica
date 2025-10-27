import { test, expect } from '@playwright/test';
import { RegisterPage } from '../pages/registerPage';
import testData from '../data/testData.json';

let registerPage: RegisterPage;
test.beforeEach(async ({ page }) => {
  registerPage = new RegisterPage(page);
  await registerPage.visitarPaginaRegistro();
});


test('TC-001: Verificación de elementos visuales en la página de registro', async ({ page }) => {
  
  await expect(registerPage.firstNameInput).toBeVisible();
  await expect(registerPage.lastNameInput).toBeVisible();
  await expect(registerPage.emailInput).toBeVisible();
  await expect(registerPage.passwordInput).toBeVisible();
  await expect(registerPage.registerButton).toBeVisible(); 
});

test('TC-002:Verificar que botón de registro esta deshabilitado por defecto', async ({ page }) => {

  await page.goto('http://localhost:3000/');  
  await expect(registerPage.registerButton).toBeDisabled();
});

test('TC-003: Verificar que botón de registro se habilita al completar formulario', async ({ page }) => {
 
  await registerPage.llenarFormularioRegistro(testData.usuarioValido.firstName, testData.usuarioValido.lastName,testData.usuarioValido.email, testData.usuarioValido.password);
  await expect(registerPage.registerButton).toBeEnabled(); 
});

test('TC-004: Redireccionamiento a página de inicio de Sesion', async ({ page }) => {
     
  await page.getByTestId('boton-login-header-signup').click();
  await expect(page).toHaveURL('http://localhost:3000/login');
});

test('TC-005: Verificar Registro exitoso', async ({ page }) => {

  await registerPage.llenarFormularioRegistro('Juan', 'Perez', 'prueba'+Date.now().toString()+'@prueba.com', 'Password123!');
  await registerPage.registerButton.click();
  await expect(page.getByText('Registro exitoso')).toBeVisible();
  await expect(page).toHaveURL('http://localhost:3000/login');
});

test('TC-006: Verificar mensaje de error al registrar con email ya existente', async ({ page }) => {
  const email = 'prueba'+Date.now().toString()+'@prueba.com';
   
  await registerPage.llenarFormularioRegistro('Juan', 'Perez', email, 'Password123!');
  await registerPage.registerButton.click();
  await expect(page.getByText('Registro exitoso')).toBeVisible();
  await registerPage.visitarPaginaRegistro();  
  await registerPage.llenarFormularioRegistro('Juan', 'Perez', email, 'Password123!');
  await registerPage.registerButton.click();
  await expect(page.getByText('Email already use')).toBeVisible();
});
