import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { CodeBlock } from "../CodeBlock";

export function EncapsulationSlide() {
  const publicExample = `class CuentaBancaria:
    def __init__(self, titular, saldo_inicial=0):
        self.titular = titular           # Público
        self._numero_cuenta = "123456"   # Protegido
        self.__saldo = saldo_inicial     # Privado
    
    # Método público para consultar saldo
    def consultar_saldo(self):
        return f"Saldo actual: ${self.__saldo}"
    
    # Método público para depositar
    def depositar(self, cantidad):
        if cantidad > 0:
            self.__saldo += cantidad
            return f"Depósito exitoso. {self.consultar_saldo()}"
        return "Cantidad inválida"
    
    # Método público para retirar
    def retirar(self, cantidad):
        if 0 < cantidad <= self.__saldo:
            self.__saldo -= cantidad
            return f"Retiro exitoso. {self.consultar_saldo()}"
        return "Fondos insuficientes o cantidad inválida"`;

  const propertyExample = `class Temperatura:
    def __init__(self):
        self.__celsius = 0
    
    @property
    def celsius(self):
        """Getter para celsius"""
        return self.__celsius
    
    @celsius.setter
    def celsius(self, valor):
        """Setter para celsius con validación"""
        if valor < -273.15:
            raise ValueError("Temperatura no puede ser menor a -273.15°C")
        self.__celsius = valor
    
    @property
    def fahrenheit(self):
        """Propiedad calculada para fahrenheit"""
        return (self.__celsius * 9/5) + 32
    
    @fahrenheit.setter
    def fahrenheit(self, valor):
        """Setter para fahrenheit"""
        self.celsius = (valor - 32) * 5/9`;

  const usageExample = `# Usar la clase CuentaBancaria
cuenta = CuentaBancaria("Juan Pérez", 1000)

# Acceso permitido (público)
print(cuenta.titular)          # "Juan Pérez"
print(cuenta.consultar_saldo()) # "Saldo actual: $1000"

# Operaciones seguras
print(cuenta.depositar(500))   # "Depósito exitoso. Saldo actual: $1500"
print(cuenta.retirar(200))     # "Retiro exitoso. Saldo actual: $1300"

# Usar propiedades
temp = Temperatura()
temp.celsius = 25
print(f"{temp.celsius}°C = {temp.fahrenheit}°F")  # "25°C = 77.0°F"

temp.fahrenheit = 86
print(f"{temp.celsius}°C = {temp.fahrenheit}°F")  # "30°C = 86°F"`;

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h1 className="text-3xl mb-2 text-primary">Encapsulación</h1>
        <p className="text-muted-foreground">Protección y control de acceso a los datos</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>🔒 ¿Qué es la Encapsulación?</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg mb-4">
            La <strong>encapsulación</strong> es el principio de ocultar los detalles internos 
            de un objeto y controlar el acceso a sus datos mediante métodos públicos.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div className="bg-green-50 p-3 rounded">
              <h4>🌍 Público</h4>
              <p><code>atributo</code></p>
              <p>Accesible desde cualquier lugar</p>
            </div>
            <div className="bg-yellow-50 p-3 rounded">
              <h4>🛡️ Protegido</h4>
              <p><code>_atributo</code></p>
              <p>Uso interno (convención)</p>
            </div>
            <div className="bg-red-50 p-3 rounded">
              <h4>🔐 Privado</h4>
              <p><code>__atributo</code></p>
              <p>Solo accesible dentro de la clase</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>🏦 Ejemplo: Cuenta Bancaria</CardTitle>
        </CardHeader>
        <CardContent>
          <CodeBlock code={publicExample} title="Encapsulación con métodos" />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>🌡️ Propiedades (Properties)</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            Las <strong>propiedades</strong> permiten usar métodos como si fueran atributos, 
            proporcionando control sobre el acceso y modificación de datos.
          </p>
          <CodeBlock code={propertyExample} title="Usando @property" />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>🎯 Uso Práctico</CardTitle>
        </CardHeader>
        <CardContent>
          <CodeBlock code={usageExample} title="Encapsulación en acción" />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>✨ Beneficios de la Encapsulación</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ul className="space-y-2">
              <li>🛡️ <strong>Seguridad:</strong> Protege datos sensibles</li>
              <li>✅ <strong>Validación:</strong> Controla valores válidos</li>
              <li>🔧 <strong>Mantenimiento:</strong> Cambios internos sin afectar el exterior</li>
            </ul>
            <ul className="space-y-2">
              <li>🎯 <strong>Interfaz clara:</strong> API bien definida</li>
              <li>🐛 <strong>Menos errores:</strong> Previene uso incorrecto</li>
              <li>📋 <strong>Documentación:</strong> Código más legible</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}