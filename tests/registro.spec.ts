import { test, expect } from '@playwright/test';

test('TC-001: Verificación de elementos visuales en la página de registro', async ({ page }) => {
  await page.goto('http://localhost:3000/');  
  await expect(page.locator('input[name="firstName"]')).toBeVisible();
  await expect(page.locator('input[name="lastName"]')).toBeVisible();
  await expect(page.locator('input[name="password"]')).toBeVisible();
  await expect(page.locator('input[name="email"]')).toBeVisible();
  await expect(page.getByTestId('boton-registrarse')).toBeVisible();
  await page.waitForTimeout(5000);
  // Expect a title "to contain" a substring.
  //await expect(page).toHaveTitle(/Playwright/);
});

test('TC-002:Verificar que botón de registro esta deshabilitado por defecto', async ({ page }) => {
  await page.goto('http://localhost:3000/');  
  await expect(page.getByTestId('boton-registrarse')).toBeDisabled();
});

test('TC-003: Verificar que botón de registro se habilita al completar formulario', async ({ page }) => {
  await page.goto('http://localhost:3000/signup');  
  await page.locator('input[name="firstName"]').fill('Juan');
  await page.locator('input[name="lastName"]').fill('Perez');
  await page.locator('input[name="password"]').fill('Password123!');
  await page.locator('input[name="email"]').fill('prueba@prueba.com');
  await expect(page.getByTestId('boton-registrarse')).toBeEnabled();
});

test('TC-004: Redireccionamiento a página de inicio de Sesion', async ({ page }) => {
  await page.goto('http://localhost:3000/');  
  await page.getByTestId('boton-login-header-signup').click();
  await expect(page).toHaveURL('http://localhost:3000/login');
});

test('TC-005: Verificar Registro exitoso', async ({ page }) => {
  await page.goto('http://localhost:3000/');  
  await page.locator('input[name="firstName"]').fill('Juan');
  await page.locator('input[name="lastName"]').fill('Perez');
  await page.locator('input[name="email"]').fill('prueba'+Date.now().toString()+'@prueba.com'); 
  await page.locator('input[name="password"]').fill('Password123!'); 
  await page.getByTestId('boton-registrarse').click();
  await expect(page.getByText('Registro exitoso')).toBeVisible();
  await expect(page).toHaveURL('http://localhost:3000/login');
});

test('TC-006: Verificar mensaje de error al registrar con email ya existente', async ({ page }) => {
  const email = 'prueba'+Date.now().toString()+'@prueba.com';
  await page.goto('http://localhost:3000/');  
  await page.locator('input[name="firstName"]').fill('Juan');
  await page.locator('input[name="lastName"]').fill('Perez');
  await page.locator('input[name="email"]').fill(email); 
  await page.locator('input[name="password"]').fill('Password123!'); 
  await page.getByTestId('boton-registrarse').click();
  await expect(page.getByText('Registro exitoso')).toBeVisible();
  await page.goto('http://localhost:3000/');  
  await page.locator('input[name="firstName"]').fill('Juan');
  await page.locator('input[name="lastName"]').fill('Perez');
  await page.locator('input[name="email"]').fill(email); 
  await page.locator('input[name="password"]').fill('Password123!'); 
  await page.getByTestId('boton-registrarse').click();
  await expect(page.getByText('Email already use')).toBeVisible();
});
