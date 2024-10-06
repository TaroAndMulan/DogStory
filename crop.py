from PIL import Image
import tkinter as tk
from tkinter import filedialog, messagebox
import os

def crop_image(image_path, top_crop, bottom_crop, output_path):
    # Open the image
    img = Image.open(image_path)

    # Get the size of the image
    width, height = img.size

    # Ensure that the cropping does not exceed image dimensions
    if top_crop + bottom_crop >= height:
        raise ValueError("Total crop size exceeds image height.")

    # Perform the crop: (left, upper, right, lower)
    cropped_img = img.crop((0, top_crop, width, height - bottom_crop))

    # Save the cropped image
    cropped_img.save(output_path)
    print(f'Cropped image saved as {output_path}')

def select_image():
    # Open a file dialog to select an image
    file_path = filedialog.askopenfilename(
        title="Select an Image",
        filetypes=[("Image Files", "*.jpg *.jpeg *.png *.bmp *.gif *.tiff")]
    )
    if file_path:
        try:
            # Generate output file path
            base, ext = os.path.splitext(file_path)
            output_path = f"{base}_cropped{ext}"
            crop_image(file_path, 114, 84, output_path)
            messagebox.showinfo("Success", f"Cropped image saved as:\n{output_path}")
        except Exception as e:
            messagebox.showerror("Error", str(e))

# Create the GUI application
root = tk.Tk()
root.title("Image Cropper")
root.geometry("350x150")
root.resizable(False, False)

# Create and place the widgets
label = tk.Label(
    root, 
    text="Crop top 114px and bottom 84px from an image.", 
    font=("Arial", 12),
    wraplength=300,
    justify="center"
)
label.pack(pady=15)

select_button = tk.Button(
    root, 
    text="Select Image", 
    command=select_image,
    font=("Arial", 10),
    width=20
)
select_button.pack(pady=5)

# Start the GUI event loop
root.mainloop()