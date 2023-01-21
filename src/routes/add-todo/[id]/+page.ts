import { error } from '@sveltejs/kit'

export function load({params}: Record<string, any>) {
  console.log(params)
  if(params.id) {
    return {
      id: params.id
    }
  }

  throw error(404, 'No id found')
}