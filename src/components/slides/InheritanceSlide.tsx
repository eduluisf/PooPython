import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { CodeBlock } from "../CodeBlock";

export function InheritanceSlide() {
  const baseClassExample = `# Clase padre (superclase)
class Animal:
    def __init__(self, nombre, especie):
        self.nombre = nombre
        self.especie = especie
    
    def hacer_sonido(self):
        return "El animal hace un sonido"
    
    def dormir(self):
        return f"{self.nombre} está durmiendo"`;

  const inheritanceExample = `# Clases hijas (subclases)
class Perro(Animal):
    def __init__(self, nombre, raza):
        super().__init__(nombre, "Canino")
        self.raza = raza
    
    def hacer_sonido(self):  # Sobrescribir método
        return "¡Guau! ¡Guau!"
    
    def mover_cola(self):    # Método específico
        return f"{self.nombre} mueve la cola"

class Gato(Animal):
    def __init__(self, nombre, color):
        super().__init__(nombre, "Felino")
        self.color = color
    
    def hacer_sonido(self):  # Sobrescribir método
        return "¡Miau! ¡Miau!"
    
    def ronronear(self):     # Método específico
        return f"{self.nombre} está ronroneando"`;

  const usageExample = `# Crear objetos de las clases hijas
mi_perro = Perro("Rex", "Golden Retriever")
mi_gato = Gato("Whiskers", "Naranja")

# Usar métodos heredados
print(mi_perro.dormir())      # "Rex está durmiendo"
print(mi_gato.dormir())       # "Whiskers está durmiendo"

# Usar métodos sobrescritos
print(mi_perro.hacer_sonido()) # "¡Guau! ¡Guau!"
print(mi_gato.hacer_sonido())  # "¡Miau! ¡Miau!"

# Usar métodos específicos
print(mi_perro.mover_cola())   # "Rex mueve la cola"
print(mi_gato.ronronear())     # "Whiskers está ronroneando"`;

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h1 className="text-3xl mb-2 text-primary">Herencia</h1>
        <p className="text-muted-foreground">Reutilización y extensión de código</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>🌳 ¿Qué es la Herencia?</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg">
            La <strong>herencia</strong> permite crear nuevas clases basadas en clases existentes, 
            heredando sus atributos y métodos, y añadiendo nuevas funcionalidades.
          </p>
        </CardContent>
      </Card>

      <div className="space-y-4">
        <Card>
          <CardHeader>
            <CardTitle>👨‍👩‍👧‍👦 Clase Padre (Superclase)</CardTitle>
          </CardHeader>
          <CardContent>
            <CodeBlock code={baseClassExample} title="Animal.py" />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>👶 Clases Hijas (Subclases)</CardTitle>
          </CardHeader>
          <CardContent>
            <CodeBlock code={inheritanceExample} title="Perro.py y Gato.py" />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>🚀 Usando la Herencia</CardTitle>
          </CardHeader>
          <CardContent>
            <CodeBlock code={usageExample} title="main.py" />
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>💡 Conceptos Importantes</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <h4 className="text-lg">✅ Ventajas</h4>
              <ul className="space-y-1 text-sm">
                <li>• Reutilización de código</li>
                <li>• Jerarquías lógicas</li>
                <li>• Fácil mantenimiento</li>
                <li>• Extensibilidad</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="text-lg">🔧 Funciones Clave</h4>
              <ul className="space-y-1 text-sm">
                <li>• <code>super()</code>: Accede a la clase padre</li>
                <li>• <strong>Sobrescritura:</strong> Redefinir métodos</li>
                <li>• <strong>Extensión:</strong> Añadir nuevos métodos</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}