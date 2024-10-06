from PIL import Image, ImageSequence
import tkinter as tk
from tkinter import filedialog, messagebox
import os

def crop_gif(image_path, top_crop, bottom_crop, output_path):
    # Open the image
    img = Image.open(image_path)

    # Get the size of the image
    width, height = img.size

    # Ensure that the cropping does not exceed image dimensions
    if top_crop + bottom_crop >= height:
        raise ValueError("Total crop size exceeds image height.")

    # Prepare a list to hold the cropped frames
    frames = []

    # Process each frame in the GIF
    for frame in ImageSequence.Iterator(img):
        # Ensure frame is in RGB mode
        frame = frame.convert('RGBA')

        # Crop the frame
        cropped_frame = frame.crop((0, top_crop, width, height - bottom_crop))

        # Append to frames list
        frames.append(cropped_frame)

    # Save the frames as an animated GIF
    frames[0].save(
        output_path,
        save_all=True,
        append_images=frames[1:],
        loop=img.info.get('loop', 0),
        duration=img.info.get('duration', 100),
        disposal=img.disposal_method if hasattr(img, 'disposal_method') else 2,
        optimize=True,
    )
    print(f'Cropped GIF saved as {output_path}')

def select_gif():
    # Open a file dialog to select a GIF image
    file_path = filedialog.askopenfilename(
        title="Select a GIF Image",
        filetypes=[("GIF Files", "*.gif")]
    )
    if file_path:
        try:
            # Generate output file path
            base, ext = os.path.splitext(file_path)
            output_path = f"{base}_cropped{ext}"

            # Crop the GIF image
            crop_gif(file_path, 114, 84, output_path)

            messagebox.showinfo("Success", f"Cropped GIF saved as:\n{output_path}")
        except Exception as e:
            messagebox.showerror("Error", str(e))

# Create the GUI application
root = tk.Tk()
root.title("GIF Cropper")
root.geometry("350x150")
root.resizable(False, False)

# Create and place the widgets
label = tk.Label(
    root,
    text="Crop top 114px and bottom 84px from a GIF image.",
    font=("Arial", 12),
    wraplength=300,
    justify="center"
)
label.pack(pady=15)

select_button = tk.Button(
    root,
    text="Select GIF Image",
    command=select_gif,
    font=("Arial", 10),
    width=20
)
select_button.pack(pady=5)

# Start the GUI event loop
root.mainloop()