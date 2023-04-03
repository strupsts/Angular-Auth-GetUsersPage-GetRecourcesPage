export interface User {
  email: string,
  password: string
}

export interface UserInfo {
  id: number,
  email: string,
  first_name: string,
  last_name: string,
  avatar: string
}
export interface IRecource {
  id: number,
  name: string,
  year: number,
  color: string,
  pantone_value: string
}

export interface IRecourcesInfo {

  page: number,
  per_page: number,
  total: number,
  total_pages: number,
  data: IRecource[],
  support: {
    url: string,
    text: string
  }
}
