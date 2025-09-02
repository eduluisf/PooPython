import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { CodeBlock } from "../CodeBlock";
import { Badge } from "../ui/badge";

export function ExercisesSlide() {
  const exercise1 = '# Ejercicio 1: Sistema de Biblioteca\n' +
    'class Libro:\n' +
    '    def __init__(self, titulo, autor, isbn):\n' +
    '        self.titulo = titulo\n' +
    '        self.autor = autor\n' +
    '        self.isbn = isbn\n' +
    '        self._disponible = True\n' +
    '    \n' +
    '    def prestar(self):\n' +
    '        if self._disponible:\n' +
    '            self._disponible = False\n' +
    '            return f"Libro \'{self.titulo}\' prestado exitosamente"\n' +
    '        return f"Libro \'{self.titulo}\' no está disponible"\n' +
    '    \n' +
    '    def devolver(self):\n' +
    '        self._disponible = True\n' +
    '        return f"Libro \'{self.titulo}\' devuelto exitosamente"\n' +
    '    \n' +
    '    @property\n' +
    '    def disponible(self):\n' +
    '        return self._disponible\n' +
    '\n' +
    '# Ejemplo de uso\n' +
    'libro1 = Libro("1984", "George Orwell", "978-0451524935")\n' +
    'print(libro1.prestar())    # Libro \'1984\' prestado exitosamente\n' +
    'print(libro1.disponible)  # False\n' +
    'print(libro1.devolver())  # Libro \'1984\' devuelto exitosamente';

  const exercise2 = '# Ejercicio 2: Jerarquía de Empleados\n' +
    'class Empleado:\n' +
    '    def __init__(self, nombre, salario_base):\n' +
    '        self.nombre = nombre\n' +
    '        self.salario_base = salario_base\n' +
    '    \n' +
    '    def calcular_salario(self):\n' +
    '        return self.salario_base\n' +
    '    \n' +
    '    def obtener_info(self):\n' +
    '        return f"{self.nombre} - Salario: ${self.calcular_salario()}"\n' +
    '\n' +
    'class Gerente(Empleado):\n' +
    '    def __init__(self, nombre, salario_base, bono_gerencial):\n' +
    '        super().__init__(nombre, salario_base)\n' +
    '        self.bono_gerencial = bono_gerencial\n' +
    '    \n' +
    '    def calcular_salario(self):\n' +
    '        return self.salario_base + self.bono_gerencial\n' +
    '\n' +
    'class Vendedor(Empleado):\n' +
    '    def __init__(self, nombre, salario_base, comision_por_venta):\n' +
    '        super().__init__(nombre, salario_base)\n' +
    '        self.comision_por_venta = comision_por_venta\n' +
    '        self.ventas = 0\n' +
    '    \n' +
    '    def registrar_venta(self, cantidad):\n' +
    '        self.ventas += cantidad\n' +
    '    \n' +
    '    def calcular_salario(self):\n' +
    '        return self.salario_base + (self.ventas * self.comision_por_venta)\n' +
    '\n' +
    '# Ejemplo de uso\n' +
    'empleados = [\n' +
    '    Gerente("Ana García", 5000, 1500),\n' +
    '    Vendedor("Carlos López", 3000, 100),\n' +
    '    Empleado("María Rodríguez", 2500)\n' +
    ']\n' +
    '\n' +
    'empleados[1].registrar_venta(5)  # Vendedor registra 5 ventas\n' +
    '\n' +
    'for empleado in empleados:\n' +
    '    print(empleado.obtener_info())';

  const exercise3 = '# Ejercicio 3: Sistema de Formas Geométricas\n' +
    'from abc import ABC, abstractmethod\n' +
    'import math\n' +
    '\n' +
    'class Forma(ABC):\n' +
    '    @abstractmethod\n' +
    '    def area(self):\n' +
    '        pass\n' +
    '    \n' +
    '    @abstractmethod\n' +
    '    def perimetro(self):\n' +
    '        pass\n' +
    '    \n' +
    '    def descripcion(self):\n' +
    '        return f"Área: {self.area():.2f}, Perímetro: {self.perimetro():.2f}"\n' +
    '\n' +
    'class Cuadrado(Forma):\n' +
    '    def __init__(self, lado):\n' +
    '        self.__lado = lado\n' +
    '    \n' +
    '    @property\n' +
    '    def lado(self):\n' +
    '        return self.__lado\n' +
    '    \n' +
    '    @lado.setter\n' +
    '    def lado(self, valor):\n' +
    '        if valor > 0:\n' +
    '            self.__lado = valor\n' +
    '        else:\n' +
    '            raise ValueError("El lado debe ser positivo")\n' +
    '    \n' +
    '    def area(self):\n' +
    '        return self.__lado ** 2\n' +
    '    \n' +
    '    def perimetro(self):\n' +
    '        return 4 * self.__lado\n' +
    '\n' +
    'class Triangulo(Forma):\n' +
    '    def __init__(self, a, b, c):\n' +
    '        if a + b > c and a + c > b and b + c > a:\n' +
    '            self.__a, self.__b, self.__c = a, b, c\n' +
    '        else:\n' +
    '            raise ValueError("No es un triángulo válido")\n' +
    '    \n' +
    '    def area(self):\n' +
    '        s = (self.__a + self.__b + self.__c) / 2\n' +
    '        return math.sqrt(s * (s - self.__a) * (s - self.__b) * (s - self.__c))\n' +
    '    \n' +
    '    def perimetro(self):\n' +
    '        return self.__a + self.__b + self.__c\n' +
    '\n' +
    '# Calculadora de formas\n' +
    'def calcular_area_total(formas):\n' +
    '    return sum(forma.area() for forma in formas)\n' +
    '\n' +
    '# Ejemplo de uso\n' +
    'formas = [\n' +
    '    Cuadrado(5),\n' +
    '    Triangulo(3, 4, 5),\n' +
    '    Cuadrado(3)\n' +
    ']\n' +
    '\n' +
    'print(f"Área total: {calcular_area_total(formas):.2f}")\n' +
    'for i, forma in enumerate(formas, 1):\n' +
    '    print(f"Forma {i}: {forma.descripcion()}")';

  const challenge = '# 🎯 DESAFÍO: Sistema de E-commerce\n' +
    '# Implementa un sistema con las siguientes clases:\n' +
    '\n' +
    '# 1. Producto (clase base):\n' +
    '#    - Atributos: nombre, precio, stock\n' +
    '#    - Métodos: aplicar_descuento(), verificar_stock()\n' +
    '\n' +
    '# 2. ProductoFisico (hereda de Producto):\n' +
    '#    - Atributo adicional: peso\n' +
    '#    - Método: calcular_envio()\n' +
    '\n' +
    '# 3. ProductoDigital (hereda de Producto):\n' +
    '#    - Atributo adicional: tamaño_archivo\n' +
    '#    - Método: generar_link_descarga()\n' +
    '\n' +
    '# 4. CarritoCompras:\n' +
    '#    - Métodos: agregar_producto(), calcular_total(), aplicar_descuento_carrito()\n' +
    '\n' +
    '# Requisitos:\n' +
    '# - Usa encapsulación para proteger el stock\n' +
    '# - Implementa polimorfismo para diferentes tipos de productos\n' +
    '# - Usa propiedades para validar precios (no negativos)\n' +
    '# - Maneja excepciones para stock insuficiente\n' +
    '\n' +
    '# ¡Tu turno! 💻';

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h1 className="text-3xl mb-2 text-primary">Ejercicios Prácticos</h1>
        <p className="text-muted-foreground">Aplicando POO en Python</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            📚 Ejercicio 1: Sistema de Biblioteca
            <Badge variant="secondary">Básico</Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            <strong>Conceptos aplicados:</strong> Clases, encapsulación, propiedades
          </p>
          <CodeBlock code={exercise1} title="biblioteca.py" />
          <div className="mt-4 p-3 bg-green-50 rounded">
            <p className="text-sm"><strong>Objetivo:</strong> Crear un sistema para gestionar libros con estados de disponibilidad.</p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            👔 Ejercicio 2: Sistema de Empleados
            <Badge variant="outline">Intermedio</Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            <strong>Conceptos aplicados:</strong> Herencia, polimorfismo, sobrescritura de métodos
          </p>
          <CodeBlock code={exercise2} title="empleados.py" />
          <div className="mt-4 p-3 bg-blue-50 rounded">
            <p className="text-sm"><strong>Objetivo:</strong> Implementar diferentes tipos de empleados con cálculos de salario específicos.</p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            📐 Ejercicio 3: Calculadora de Formas
            <Badge variant="destructive">Avanzado</Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            <strong>Conceptos aplicados:</strong> Clases abstractas, propiedades, validación, polimorfismo
          </p>
          <CodeBlock code={exercise3} title="formas_geometricas.py" />
          <div className="mt-4 p-3 bg-purple-50 rounded">
            <p className="text-sm"><strong>Objetivo:</strong> Sistema completo con validaciones y cálculos matemáticos.</p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            🎯 Desafío Final
            <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white">Experto</Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <CodeBlock code={challenge} title="desafio.py" />
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-3 bg-yellow-50 rounded">
              <h4 className="text-sm mb-2">🎯 Objetivos de Aprendizaje</h4>
              <ul className="text-xs space-y-1">
                <li>• Diseño de jerarquías de clases</li>
                <li>• Implementación de patrones POO</li>
                <li>• Manejo de excepciones</li>
                <li>• Validación de datos</li>
              </ul>
            </div>
            <div className="p-3 bg-green-50 rounded">
              <h4 className="text-sm mb-2">💡 Tips para el Desafío</h4>
              <ul className="text-xs space-y-1">
                <li>• Planifica la estructura antes de codificar</li>
                <li>• Usa diagramas UML si es necesario</li>
                <li>• Implementa pruebas paso a paso</li>
                <li>• Considera casos edge y validaciones</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>🚀 Próximos Pasos</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg">
              <h4 className="text-lg mb-2">🔧 Patrones de Diseño</h4>
              <p className="text-sm">Singleton, Observer, Factory</p>
            </div>
            <div className="text-center p-4 bg-gradient-to-br from-green-50 to-green-100 rounded-lg">
              <h4 className="text-lg mb-2">🧪 Testing</h4>
              <p className="text-sm">Unit tests, TDD, Mocking</p>
            </div>
            <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg">
              <h4 className="text-lg mb-2">🏗️ Arquitectura</h4>
              <p className="text-sm">SOLID, Clean Code, Refactoring</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}