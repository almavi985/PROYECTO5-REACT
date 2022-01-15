import axios from 'axios';

const URL_ROOT = `${process.env.REACT_APP_API}/usuario`;

export const cuentaService = async (usuario) => {
  try {
    const resp = await axios.post(`${URL_ROOT}/cuenta`, usuario);
    return resp.data
  } catch (e) {
    console.log('1',e.data.message)
    console.log('2',e.message)
  }
}

export const sesionService = async (usuario) => {
  try {
    const resp = await axios.post(`${URL_ROOT}/sesion`, usuario);
    return resp.data
  } catch (e) {
    console.log('1',e.data.message)
    console.log('2',e.message)
  }
}