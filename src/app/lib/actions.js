'use server';

export async function createTransaction(formData) { 
    const rawFormData = {
        amount: formData.get('amount'),
        type: formData.get('type'),
        description: formData.get('description')
    }

    console.log(`rawFormData: ${JSON.stringify(rawFormData)}`);
}