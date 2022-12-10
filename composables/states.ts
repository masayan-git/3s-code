//このファイルは使用していません。
export const formState = () =>
  useState('contact', () => {
    return {
      company: '',
      name: '',
      email: '',
      tel: '',
      content: '',
      flag: false
    }
  })
