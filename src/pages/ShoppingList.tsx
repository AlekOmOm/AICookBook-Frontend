import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Check, Download, ArrowRight } from 'lucide-react';

function ShoppingList() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [checkedItems, setCheckedItems] = useState<Set<string>>(new Set());

  // Mock data - replace with API call
  const items = [
    { id: '1', name: 'Pasta', amount: '500', unit: 'g' },
    { id: '2', name: 'Tomatoes', amount: '4', unit: 'pieces' },
    { id: '3', name: 'Basil', amount: '1', unit: 'bunch' },
  ];

  const allItemsChecked = items.length === checkedItems.size;

  const handleCheck = (itemId: string) => {
    const newCheckedItems = new Set(checkedItems);
    if (checkedItems.has(itemId)) {
      newCheckedItems.delete(itemId);
    } else {
      newCheckedItems.add(itemId);
    }
    setCheckedItems(newCheckedItems);
  };

  const handleMarkAll = () => {
    setCheckedItems(new Set(items.map(item => item.id)));
  };

  const handleCook = () => {
    // Navigate to recipe detail page instead of cook page
    navigate(`/recipe/${id}`);
  };

  return (
    <div className="max-w-3xl mx-auto">
      <div className="bg-white shadow-sm rounded-lg p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Shopping List</h2>
          <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
            <Download className="h-5 w-5 mr-2" />
            Download
          </button>
        </div>

        <div className="divide-y divide-gray-200">
          {items.map((item) => (
            <div key={item.id} className="py-4 flex items-center">
              <input
                type="checkbox"
                checked={checkedItems.has(item.id)}
                onChange={() => handleCheck(item.id)}
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <span className="ml-3 flex-1 text-gray-900">
                {item.name} ({item.amount} {item.unit})
              </span>
              {checkedItems.has(item.id) && (
                <Check className="h-5 w-5 text-green-500" />
              )}
            </div>
          ))}
        </div>

        <div className="mt-6 flex justify-end">
          {!allItemsChecked ? (
            <button
              onClick={handleMarkAll}
              className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700"
            >
              Mark all done
            </button>
          ) : (
            <button
              onClick={handleCook}
              className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700"
            >
              Cook <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default ShoppingList;