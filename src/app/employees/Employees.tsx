import React from 'react';
import { User, UserCheck } from 'lucide-react';

const Employees: React.FC = () => {
  // Données d'exemple des employés
  const employees = [
    { id: 1, name: "Marie Dupont", role: "Manager", active: true },
    { id: 2, name: "Jean Martin", role: "Développeur", active: true },
    { id: 3, name: "Sophie Bernard", role: "Designer", active: false },
  ];

  const activeEmployees = employees.filter(emp => emp.active);

  return (
    <div className="space-y-3">
      {activeEmployees.length === 0 ? (
        <div className="text-center py-6 text-gray-500">
          <User className="w-8 h-8 mx-auto mb-2 text-gray-400" />
          <p className="text-sm">Aucun employé actif</p>
        </div>
      ) : (
        <>
          {activeEmployees.map((employee) => (
            <div key={employee.id} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <UserCheck className="w-4 h-4 text-blue-600" />
              </div>
              <div className="flex-1">
                <p className="font-medium text-gray-800 text-sm">{employee.name}</p>
                <p className="text-xs text-gray-500">{employee.role}</p>
              </div>
            </div>
          ))}
          <div className="text-center pt-2">
            <span className="text-xs text-gray-500">{activeEmployees.length} employé(s) actif(s)</span>
          </div>
        </>
      )}
    </div>
  );
};

export default Employees;