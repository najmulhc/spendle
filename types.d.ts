 export interface LayOutProps {
    children: React.ReactNode
 }

 export interface TransactionPageProps {
    type: 'gaining' | 'spending'
   title: string;
   options: { value: string; text: string }[];
   submitText: string;
 }
