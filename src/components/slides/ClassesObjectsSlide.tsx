import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { CodeBlock } from "../CodeBlock";

export function ClassesObjectsSlide() {
  const classExample = `# Definir una clase
class Persona:
    def __init__(self, nombre, edad):
        self.nombre = nombre  # Atributo
        self.edad = edad      # Atributo
    
    def saludar(self):        # Método
        return f"Hola, soy {self.nombre}"
    
    def cumplir_anos(self):   # Método
        self.edad += 1
        return f"Ahora tengo {self.edad} años"`;

  const objectExample = `# Crear objetos (instancias)
persona1 = Persona("Ana", 25)
persona2 = Persona("Carlos", 30)

# Usar métodos
print(persona1.saludar())  # "Hola, soy Ana"
print(persona2.saludar())  # "Hola, soy Carlos"

# Acceder a atributos
print(persona1.nombre)     # "Ana"
print(persona2.edad)       # 30

# Modificar atributos
persona1.cumplir_anos()
print(persona1.edad)       # 26`;

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h1 className="text-3xl mb-2 text-primary">Clases y Objetos</h1>
        <p className="text-muted-foreground">Los fundamentos de la POO</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>🏗️ Clases</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              Una <strong>clase</strong> es como un molde o plantilla que define 
              las características y comportamientos que tendrán los objetos.
            </p>
            <CodeBlock code={classExample} title="Definiendo una clase" />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>🎯 Objetos</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              Un <strong>objeto</strong> es una instancia específica de una clase. 
              Cada objeto tiene sus propios valores para los atributos.
            </p>
            <CodeBlock code={objectExample} title="Creando y usando objetos" />
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>🔑 Conceptos Clave</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <h3 className="text-lg mb-2">__init__</h3>
              <p className="text-sm">Constructor que inicializa los atributos del objeto</p>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <h3 className="text-lg mb-2">self</h3>
              <p className="text-sm">Referencia al objeto actual dentro de la clase</p>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <h3 className="text-lg mb-2">Métodos</h3>
              <p className="text-sm">Funciones que definen el comportamiento del objeto</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}