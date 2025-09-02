import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

export function IntroSlide() {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <h1 className="text-4xl mb-4 text-primary">Programación Orientada a Objetos</h1>
        <h2 className="text-2xl text-muted-foreground">con Python</h2>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>¿Qué es POO?</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg leading-relaxed">
            La Programación Orientada a Objetos (POO) es un paradigma de programación 
            que organiza el código en <strong>objetos</strong> que contienen datos (atributos) 
            y código (métodos).
          </p>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Ventajas de POO</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li>• <strong>Reutilización:</strong> Código modular y reutilizable</li>
              <li>• <strong>Mantenimiento:</strong> Fácil de mantener y actualizar</li>
              <li>• <strong>Escalabilidad:</strong> Fácil expansión del código</li>
              <li>• <strong>Organización:</strong> Estructura clara y lógica</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Conceptos Principales</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li>• <strong>Clases:</strong> Plantillas para crear objetos</li>
              <li>• <strong>Objetos:</strong> Instancias de las clases</li>
              <li>• <strong>Herencia:</strong> Reutilización de código</li>
              <li>• <strong>Polimorfismo:</strong> Múltiples formas</li>
              <li>• <strong>Encapsulación:</strong> Ocultamiento de datos</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}