# check_simple_import.py
import simple_facerec, inspect
print("Imported module path:", simple_facerec.__file__)
print("SimpleFacerec._init_ signature:", inspect.signature(simple_facerec.SimpleFacerec._init_))
print("--- SimpleFacerec source (first 40 lines) ---")
src = inspect.getsource(simple_facerec.SimpleFacerec)
print("\n".join(src.splitlines()[:40]))