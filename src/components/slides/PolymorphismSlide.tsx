import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { CodeBlock } from "../CodeBlock";

export function PolymorphismSlide() {
  const baseExample = `# Clase base
class Vehiculo:
    def __init__(self, marca, modelo):
        self.marca = marca
        self.modelo = modelo
    
    def acelerar(self):
        return "El vehículo acelera"
    
    def frenar(self):
        return "El vehículo frena"
    
    def info(self):
        return f"{self.marca} {self.modelo}"`;

  const polymorphicExample = `# Clases derivadas con polimorfismo
class Coche(Vehiculo):
    def acelerar(self):
        return "El coche acelera pisando el acelerador 🚗"
    
    def frenar(self):
        return "El coche frena con los frenos de disco"

class Motocicleta(Vehiculo):
    def acelerar(self):
        return "La moto acelera girando el puño del acelerador 🏍️"
    
    def frenar(self):
        return "La moto frena con frenos delanteros y traseros"

class Bicicleta(Vehiculo):
    def acelerar(self):
        return "La bicicleta acelera pedaleando más fuerte 🚴"
    
    def frenar(self):
        return "La bicicleta frena con frenos de cable"`;

  const demoExample = `# Función que usa polimorfismo
def probar_vehiculo(vehiculo):
    print(f"Probando: {vehiculo.info()}")
    print(f"- {vehiculo.acelerar()}")
    print(f"- {vehiculo.frenar()}")
    print("-" * 40)

# Lista de diferentes vehículos
vehiculos = [
    Coche("Toyota", "Corolla"),
    Motocicleta("Honda", "CBR600"),
    Bicicleta("Trek", "Mountain")
]

# Misma función, diferentes comportamientos
for vehiculo in vehiculos:
    probar_vehiculo(vehiculo)`;

  const abstractExample = `from abc import ABC, abstractmethod

# Clase abstracta para polimorfismo
class Forma(ABC):
    @abstractmethod
    def calcular_area(self):
        pass
    
    @abstractmethod
    def calcular_perimetro(self):
        pass

class Rectangulo(Forma):
    def __init__(self, ancho, alto):
        self.ancho = ancho
        self.alto = alto
    
    def calcular_area(self):
        return self.ancho * self.alto
    
    def calcular_perimetro(self):
        return 2 * (self.ancho + self.alto)

class Circulo(Forma):
    def __init__(self, radio):
        self.radio = radio
    
    def calcular_area(self):
        return 3.14159 * self.radio ** 2
    
    def calcular_perimetro(self):
        return 2 * 3.14159 * self.radio`;

  const advancedExample = `# Usando polimorfismo con formas
def mostrar_info_forma(forma):
    print(f"Área: {forma.calcular_area():.2f}")
    print(f"Perímetro: {forma.calcular_perimetro():.2f}")

# Crear diferentes formas
formas = [
    Rectangulo(5, 3),
    Circulo(4),
    Rectangulo(2, 8)
]

# Mismo método, diferentes implementaciones
for i, forma in enumerate(formas, 1):
    print(f"Forma {i}:")
    mostrar_info_forma(forma)
    print()`;

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h1 className="text-3xl mb-2 text-primary">Polimorfismo</h1>
        <p className="text-muted-foreground">Una interfaz, múltiples implementaciones</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>🎭 ¿Qué es el Polimorfismo?</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg mb-4">
            El <strong>polimorfismo</strong> permite que objetos de diferentes clases 
            respondan al mismo método de manera específica, manteniendo una interfaz común.
          </p>
          <div className="bg-blue-50 p-4 rounded-lg">
            <p className="text-center text-lg">
              <strong>"Misma operación, diferentes comportamientos"</strong>
            </p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>🚗 Clase Base: Vehículo</CardTitle>
        </CardHeader>
        <CardContent>
          <CodeBlock code={baseExample} title="vehiculo.py" />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>🔄 Implementaciones Polimórficas</CardTitle>
        </CardHeader>
        <CardContent>
          <CodeBlock code={polymorphicExample} title="vehículos específicos" />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>⚡ Polimorfismo en Acción</CardTitle>
        </CardHeader>
        <CardContent>
          <CodeBlock code={demoExample} title="demo.py" />
          <div className="mt-4 p-3 bg-gray-50 rounded">
            <h4 className="text-sm mb-2">Salida esperada:</h4>
            <pre className="text-xs text-gray-700">
{`Probando: Toyota Corolla
- El coche acelera pisando el acelerador 🚗
- El coche frena con los frenos de disco
----------------------------------------
Probando: Honda CBR600
- La moto acelera girando el puño del acelerador 🏍️
- La moto frena con frenos delanteros y traseros`}
            </pre>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>🎯 Clases Abstractas</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            Las <strong>clases abstractas</strong> definen una interfaz que debe ser implementada 
            por las clases hijas, garantizando el polimorfismo.
          </p>
          <CodeBlock code={abstractExample} title="formas.py" />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>📐 Ejemplo Avanzado</CardTitle>
        </CardHeader>
        <CardContent>
          <CodeBlock code={advancedExample} title="calculadora_formas.py" />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>💡 Ventajas del Polimorfismo</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <h4>🔧 Flexibilidad</h4>
              <ul className="text-sm space-y-1">
                <li>• Código más adaptable</li>
                <li>• Fácil extensión</li>
                <li>• Interfaz unificada</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h4>🚀 Mantenimiento</h4>
              <ul className="text-sm space-y-1">
                <li>• Menos código duplicado</li>
                <li>• Cambios localizados</li>
                <li>• Testing simplificado</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}