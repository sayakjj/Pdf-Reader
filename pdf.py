import PyPDF2

def extract_text_from_pdf(pdf_path):
    # Open the PDF file
    with open(pdf_path, 'rb') as file:
        reader = PyPDF2.PdfReader(file)
        
        # Extract text from each page
        text = ""
        for page in reader.pages:
            text += page.extract_text()
        
        return text

# Example usage
pdf_path = "example.pdf"  # Replace with the path to your PDF file
extracted_text = extract_text_from_pdf(pdf_path)
print(extracted_text)
