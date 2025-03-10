'use server';

import { signIn, signOut } from '@/../auth';

export async function doSocialLogin(formData) {
  const action = formData.get('action');
  await signIn(action, { redirectTo: '/' });
}

export async function doLogout() {
  await signOut({ redirectTo: '/' });
}

export async function doCredentialLogin(formData) {
  try {
    const response = await signIn('credentials', {
      email: formData.email,
      password: formData.password,
      redirect: false
    });
    console.log('response is', response)
    
    return response;
  } catch (err) {
    throw err;
  }
}
