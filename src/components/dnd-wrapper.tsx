"use client";

import {
  DndContext,
  closestCenter,
  DragEndEvent,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import {
  restrictToVerticalAxis,
  restrictToParentElement,
} from "@dnd-kit/modifiers";

interface SortableItemProps {
  id: string;
  children: (props: {
    listeners: React.HTMLAttributes<HTMLElement>;
    attributes: React.HTMLAttributes<HTMLElement>;
    isDragging: boolean;
    setNodeRef: (node: HTMLElement | null) => void;
    style: React.CSSProperties;
  }) => React.ReactNode;
}

const SortableItem: React.FC<SortableItemProps> = ({ id, children }) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id });

  const style: React.CSSProperties = {
    transform: CSS.Transform.toString(transform),
    transition,
    zIndex: isDragging ? 50 : undefined,
    background: isDragging ? "#f9fafb" : undefined,
  };

  return (
    <>
      {children({
        listeners: listeners ?? {},
        attributes: attributes ?? {},
        isDragging,
        setNodeRef,
        style,
      })}
    </>
  );
};

interface SortableListProps<T> {
  items: T[];
  onChange: (items: T[]) => void;
  getId: (item: T) => string;
  renderItem: (
    item: T,
    index: number,
    dragHandleProps: {
      listeners: React.HTMLAttributes<HTMLElement>;
      attributes: React.HTMLAttributes<HTMLElement>;
    }
  ) => React.ReactNode;
}

function SortableList<T>({
  items,
  onChange,
  getId,
  renderItem,
}: SortableListProps<T>) {
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;

    const oldIndex = items.findIndex((item) => getId(item) === active.id);
    const newIndex = items.findIndex((item) => getId(item) === over.id);

    const newItems = arrayMove(items, oldIndex, newIndex);
    onChange(newItems);
  };

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
      modifiers={[restrictToVerticalAxis, restrictToParentElement]}
    >
      <SortableContext
        items={items.map((item) => getId(item))}
        strategy={verticalListSortingStrategy}
      >
        <div className="space-y-2">
          {items.map((item, index) => (
            <SortableItem key={getId(item)} id={getId(item)}>
              {({ listeners, attributes, setNodeRef, style }) => (
                <div
                  ref={setNodeRef}
                  style={style}
                  className="flex items-center justify-between"
                >
                  <div className="flex-1">
                    {renderItem(item, index, { listeners, attributes })}
                  </div>
                </div>
              )}
            </SortableItem>
          ))}
        </div>
      </SortableContext>
    </DndContext>
  );
}

export default SortableList;
